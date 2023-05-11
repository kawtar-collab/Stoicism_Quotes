const QuotessContainer = document.querySelector('.Quotess-container')
const Quotes = document.querySelector('.Quotes')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const Quotess = [
  {
    name: ' Marcus Aurelius',
    book: 'Meditations',
    photo:
      'https://th.bing.com/th/id/R.6b9c20afeabe1f96b842c2a972aa3d39?rik=I%2fWJcUgXCEtW3g&riu=http%3a%2f%2fwww.riovida.net%2fwp-content%2fuploads%2f2016%2f08%2fmarcus_aurelius_4.jpg&ehk=u0pBZsZn01yKBgox9Yf8noSVKUQE59tSwf2YEv7p4b8%3d&risl=&pid=ImgRaw&r=0',
    text:
      "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
  },
  {
    name: ' Marcus Aurelius',
    book: 'Meditations',
    photo: 'https://th.bing.com/th/id/R.6b9c20afeabe1f96b842c2a972aa3d39?rik=I%2fWJcUgXCEtW3g&riu=http%3a%2f%2fwww.riovida.net%2fwp-content%2fuploads%2f2016%2f08%2fmarcus_aurelius_4.jpg&ehk=u0pBZsZn01yKBgox9Yf8noSVKUQE59tSwf2YEv7p4b8%3d&risl=&pid=ImgRaw&r=0',
    text:
      'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
  },
  {
    name: 'Lucius Annaeus Seneca',
    book: ' The Stoic Philosophy of Seneca: Essays and Letters',
    photo: 'https://i0.wp.com/www.nationalgalleries.org/sites/default/files/styles/postcard/public/externals/185247.jpg?itok=4f0ggqv_?w=730',
    text:
      "It is the power of the mind to be unconquerable.",
  },
  {
    name: 'Lucius Annaeus Seneca',
    book: ' The Stoic Philosophy of Seneca: Essays and Letters',
    photo: 'https://i0.wp.com/www.nationalgalleries.org/sites/default/files/styles/postcard/public/externals/185247.jpg?itok=4f0ggqv_?w=730',
    text:
      "Until we have begun to go without them, we fail to realize how unnecessary many things are. We've been using them not because we needed them but because we had them.",
  },
  {
    name: 'Lucius Annaeus Seneca',
    book: ' The Stoic Philosophy of Seneca: Essays and Letters',
    photo: 'https://i0.wp.com/www.nationalgalleries.org/sites/default/files/styles/postcard/public/externals/185247.jpg?itok=4f0ggqv_?w=730',
    text:
      "Regard [a friend] as loyal, and you will make him loyal.",
  },
  {
    name: 'Epictetus',
    book: ' The Art of Living: The Classical Manual on Virtue, Happiness and Effectiveness',
    photo:
      'https://th.bing.com/th/id/R.788e1b2fc351c5ff194430225662d28c?rik=SYsN%2fMuKdld27Q&riu=http%3a%2f%2fwww.justcharlie.com%2fwp-content%2fuploads%2f2014%2f10%2fepictetus-300x300.jpg&ehk=m%2fnLfNYa6lPq7F%2b8kjyKyH2Btx4QRLJswXS83IxssRo%3d&risl=&pid=ImgRaw&r=0',
    text:
      'Remember, it is not enough to be hit or insulted to be harmed, you must believe that you are being harmed. If someone succeeds in provoking you, realize that your mind is complicit in the provocation. Which is why it is essential that we not respond impulsively to impressions; take a moment before reacting, and you will find it easier to maintain control.',
  },
  {
    name: 'Epictetus',
    book: ' The Art of Living: The Classical Manual on Virtue, Happiness and Effectiveness',
    photo:
      'https://th.bing.com/th/id/R.788e1b2fc351c5ff194430225662d28c?rik=SYsN%2fMuKdld27Q&riu=http%3a%2f%2fwww.justcharlie.com%2fwp-content%2fuploads%2f2014%2f10%2fepictetus-300x300.jpg&ehk=m%2fnLfNYa6lPq7F%2b8kjyKyH2Btx4QRLJswXS83IxssRo%3d&risl=&pid=ImgRaw&r=0',
    text:
      'What really frightens and dismays us is not external events themselves, but the way in which we think about them. It is not things that disturb us, but our interpretation of their significance.',
  },
]

let idx = 1

function updateQuotes() {
  const { name, book, photo, text } = Quotess[idx]

  Quotes.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = book

  idx++

  if (idx > Quotess.length - 1) {
    idx = 0
  }
}

setInterval(updateQuotes, 10000)
