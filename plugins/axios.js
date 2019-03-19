export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url) // eslint-disable-line
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    console.info("ERROR: {}", error.response) // eslint-disable-line
    if (code === 400) {
      redirect('/401')
    }
  })
}
