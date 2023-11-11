/** @format */

const API_KEY = "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"

const inPut = document.getElementById("input")
const image = document.querySelector(".images")

const getImage = async () => {
  const methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      prompt: inPut.value,
      n: 3,
      size: "256x256",
    }),
  }
  const res = await fetch(
    "https://api.openai.com/v1/images/generations",
    methods
  )
  const data = await res.json()
  const listImage = data.data
  image.innerHTML = ""
  listImage.map((photo) => {
    const container = document.createElement("div")
    image.append(container)

    const img = document.createElement("img")
    container.append(img)
    img.src = photo.url
  })
}
