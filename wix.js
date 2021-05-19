const initiatives = [
  {
    id: 1,
    name: 'Make chair for everyone.',
    img:
      'https://www.incimages.com/uploaded_files/image/1920x1080/getty_615524918_379849.jpg',
    description: 'We plan to make 10,000 chairs to give to the world.',
  },
  {
    id: 2,
    name: 'Empower all everyone.',
    img:
      'https://media.hearstapps.com/hmg-prod/images/inspirational-quotes-1547831262.jpg?crop=3000,1504.253,x0,y499,safe&width=980&auto=webp&optimize=medium',
    description:
      'We plan to give power to everyone by paying for their electricity for 1 month.',
  },
]

const goals = [
  {
    id: 1,
    name: 'Sturdy Chair for All.',
    img:
      'https://i.etsystatic.com/16793295/r/il/8db55e/1526891965/il_1588xN.1526891965_5p18.jpg',
    description:
      'We plan to make 10,000 chairs to give to women professionals.',
  },
  {
    id: 2,
    name: 'Group chairs.',
    img:
      'https://images.squarespace-cdn.com/content/v1/5346a846e4b0101b157468cf/1588287523410-UX8R6JRTDTBGF5WYQPZC/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/Seventeen+camping+chairs+in+a+circle+in+a+forested+setting.?format=1500w',
    description: 'We plan to donate sets of chairs to best friends.',
  },
]

const textOne = `March is Women’s History Month, and March 8th is a globally recognized
  call to action to accelerate gender parity and celebrate women’s
  achievements. The first ever gathering for International Women’s Day was
  held in 1911, and since then the issue of gender equality has gained
  enormous visibility, especially in the workplace. As of 2017, the
  Department of Labor reported there were 74.6 million women in the
  workforce, almost 47% of the total, and that number continues to grow.
  Over half of all management positions are held by women and around 10
  million businesses are owned by women, including Career Group Companies!
  Unfortunately, the events of this past year have had a disproportionate
  effect on women in the workforce, as statistically female-dominated
  industries have been more negatively affected by COVID-19 (such as
  travel and hospitality, restaurants, and in-person retail) and women
  working from home have had the added challenge of juggling work and
  child-care, due to remote schooling. We are eager to see these
  industries return to their pre-pandemic vitality, but this data just
  proves it’s more important than ever to uplift the hard-working women in
  our lives and within our organizations. By advocating for women we
  continue to make strides toward equality which means more women
  achieving their goals, taking on leadership roles, and finding career
  success!`

const title = ChairWomen

///////
const createImage = (url) => {
  const imageElement = document.createElement('img')
  imageElement.src = url
  imageElement.id = 'wdce-image'
  return imageElement
}

const createH2 = (h2) => {
  const h2Element = document.createElement('h2')
  h2Element.textContent = h2
  h2Element.id = 'wdce-h2'
  return h2Element
}

const createH3 = (id, text) => {
  const h3Element = document.createElement('h3')
  h3Element.id = id
  h3Element.textContent = text
  return h3Element
}

const createTextContainer = () => {
  const textContainer = document.createElement('div')
  textContainer.id = 'wdce-text-container'
  textContainer.appendChild(createH2(title))
  textContainer.appendChild(createH3('wdce-h3-1', textOne))
  textContainer.appendChild(createH3('wdce-h3-2', textOne))
  return textContainer
}

const createImageContainer = () => {
  const imageContainer = document.createElement('div')
  imageContainer.id = 'wdce-image-container'
  imageContainer.appendChild(createImage(goals[0].img))
  return imageContainer
}

const createStyle = () => {
  const styleElement = document.createElement('style')
  styleElement.innerHTML = `
    wix-default-custom-element {
        background-color: #f0f4f7;
        display: flex;
        height: 100%;
        height: -moz-available;
        height: -webkit-fill-available;
        width: 100%;
        justify-content: center;
      }

    #wdce-image-container {
        width: 35%;
        max-width: 165px;
        display: flex;
        margin: 0 20px 0 30px;
        overflow: hidden;
    }

    #wdce-image {
        width: 100%;
        min-width: 100px;
    }

    #wdce-text-container {
        display: flex;
        flex-direction: column;
        width: 65%;
        justify-content: center;
        max-width: 314px;
        min-width: 200px;
    }

    #wdce-h2 {
        font-family: 'HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, ãƒ¡ã‚¤ãƒªã‚ª, meiryo, ãƒ’ãƒ©ã‚®ãƒŽè§’ã‚´ pro w3, hiragino kaku gothic pro, sans-serif',
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.89px;
        color: #32536a;
        margin: 0 0 16px 0;
    }

    #wdce-h3-1, #wdce-h3-2 {
        font-family: 'HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, ãƒ¡ã‚¤ãƒªã‚ª, meiryo, ãƒ’ãƒ©ã‚®ãƒŽè§’ã‚´ pro w3, hiragino kaku gothic pro, sans-serif',
        font-size: 14px;
        font-weight: 300;
        line-height: 1.43;
        color: #162d3d;
        margin: 0 0 8px 0;
    }
    `
  return styleElement
}

class WixDefaultCustomElement extends HTMLElement {
  constructor() {
    super()
    console.log(DEBUG_TEXT)
  }

  connectedCallback() {
    this.appendChild(createStyle())
    this.appendChild(createImageContainer())
    this.appendChild(createTextContainer())
  }
}
customElements.define('wix-default-custom-element', WixDefaultCustomElement)
