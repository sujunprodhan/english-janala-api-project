const loadLesson = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(json => displayLesson(json.data))
}

const removeActive = () => {
  const lessonButtons = document.querySelectorAll('.lesson_btn')
  console.log(lessonButtons);
  lessonButtons.forEach((btn) => btn.classList.remove('active'))

}


const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive()
      const clickBtn = document.getElementById(`lesson_btn_${id}`)
      // console.log(clickBtn);
      clickBtn.classList.add('active')
      displayLevelWord(data.data)

    })

  const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word_container')
    wordContainer.innerHTML = ''
    if (words.length == 0) {
      wordContainer.innerHTML = `
      <div class="text-center col-span-full">
      <img src="./assets/alert-error.png" alt="" class="mx-auto">
        <p class="font_bangla text-xl text-[#39393d] mb-5">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি..</p>
        <h2 class="font_bangla text-4xl font-semibold">নেক্সট Lesson এ যান ..</h2>
      </div>
      `
      return
    }
    words.forEach(word => {
      const card = document.createElement('div')
      card.innerHTML = `
    <div class="text-center bg-white p-10 rounded-lg shadow-lg h-full">
        <h2 class="text-2xl font-bold mb-2">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
        <p class="mb-2">Meaning / Pronounciation</p>
        <h3 class="font_bangla text-2xl font-semibold text-[#39393d]">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "Pronunciation পাওয়া যায়নি"}"</h3>
        <div class="flex justify-between">
          <div class="bg-[#1A91FF10] hover:bg-[#1A91FF60] px-2 py-2 rounded-md">
            <button onclick="my_modal_5.showModal()"><i class="fas fa-info-circle"></i></button>
          </div>
          <div class= "bg-[#1A91FF10] hover:bg-[#1A91FF60] px-2 py-2 rounded-md">
            <button><i class="fa-solid fa-volume-high "></i></button>
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
          <button id="lesson_btn_${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson_btn"><i class="fa-solid fa-book-open"></i>Lessons -${lesson.level_no}</button>
  `   // 4. append
    levelContainer.append(btnDiv)
  }
}

loadLesson()