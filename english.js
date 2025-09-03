const loadLesson = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(json => displayLesson(json.data))
}

const loadLevelWord = (id) => {
  const url = 'https://openapi.programming-hero.com/api/level/5'
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data))

  const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word_container')
    // wordContainer.innerHTML = ''

    words.forEach(word => {
      const card = document.createElement('div')
      card.innerHTML = `
    <div class="text-center bg-white p-10 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-2">Egar</h2>
        <p class="mb-2">Meaning / Pronounciation</p>
        <h3 class="font_bangla text-2xl font-semibold text-[#39393d]">"আগ্রহী / ইগার"</h3>
        <div class="flex justify-between">
          <div class="bg-slate-300 px-2 py-2 rounded-md">
            <i class="fas fa-info-circle"></i>
          </div>
          <div class="bg-slate-300 px-2 py-2 rounded-md">
            <i class="fa-solid fa-volume-high"></i>
          </div>
        </div>
      </div>
    `

      wordContainer.append(card)
    })



  }

}
const displayLesson = (lessons) => {
  // 1. get the container and empty
  const levelContainer = document.getElementById('lable_container')
  levelContainer.innerHTML = ''
  // 2. get into evey lissons dorbo
  for (let lesson of lessons) {
    // 3.create element
    const btnDiv = document.createElement('div')
    btnDiv.innerHTML = `
          <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lessons -${lesson.level_no}</button>
  `
    levelContainer.append(btnDiv)


    // 4. append
  }



}

loadLesson()