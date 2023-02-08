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
    // On créer la div principal
    const root = document.createElement('div')
    root.classList.add('cocktail')
  
    // On créer la div contenant l'image
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
  
    // On créer la div pour le detail
    const detail = document.createElement('div')
    detail.classList.add('detail')
  
    // On créé l'image
    const img = document.createElement('img')
    img.setAttribute('alt', nom)
    img.setAttribute('src', image)
  
    // On crée le paragraph contenant le nom du cocktail
    const p = document.createElement('p')
    p.innerText = nom
  
    // On assemble les éléments
    root.append(imgContainer)
    root.append(detail)
    imgContainer.append(img)
    detail.append(p)
  
    // On retourne la div
    return root
  }