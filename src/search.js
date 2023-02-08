export async function searchForCocktails() {
    const search = document.querySelector('#search').value

    if (!search) {
      return
    }

    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,)
    const data = await response.json()
    const drinks = data.drinks
    const container = document.querySelector('.cocktail-container')
    container.innerHTML = ''

    for (const drink of drinks) {
      const div = createCocktail(drink.strDrink, drink.strDrinkThumb)
      container.append(div)
    }
}

export function createCocktail(nom, image) {
    const root = document.createElement('div')
    root.classList.add('cocktail')
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    const detail = document.createElement('div')
    detail.classList.add('detail')
    const img = document.createElement('img')
    img.setAttribute('alt', nom)
    img.setAttribute('src', image)
    const p = document.createElement('p')
    p.innerText = nom
    root.append(imgContainer)
    root.append(detail)
    imgContainer.append(img)
    detail.append(p)
    return root
  }