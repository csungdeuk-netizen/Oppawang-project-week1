document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Function to set the theme
  const setTheme = (theme) => {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      themeToggle.textContent = '☀️';
    } else {
      body.classList.remove('dark-mode');
      themeToggle.textContent = '🌙';
    }
  };

  // Check for saved theme in local storage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  }

  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  });


  const resultElement = document.getElementById('result');
  const pickButton = document.getElementById('pick-button');
  const characterElement = document.getElementById('character');
  const characterImg = document.getElementById('character-img');

  const options = [
    "앵깅왕 코딱지 파서 보여주기",
    "앵깅왕 신발끈 서로 묶어놓기",
    "앵깅왕 의자에 압정 놓기",
    "앵깅왕 커피에 소금 넣기",
    "앵깅왕 양말 훔쳐서 숨기기",
    "앵깅왕 자는 동안 얼굴에 낙서하기",
    "앵깅왕이 가장 아끼는 물건 숨기기",
    "앵깅왕의 밥에 콩 잔뜩 넣기",
    "앵깅왕의 최애 과자 뺏어먹기",
    "앵깅왕의 의자에 방귀 쿠션 놓기"
  ];

  pickButton.addEventListener('click', () => {
    resultElement.style.opacity = 0;

    // Trigger animation
    characterElement.classList.add('is-teased');
    setTimeout(() => {
      characterElement.classList.remove('is-teased');
    }, 500); // Animation duration is 0.5s

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomOption = options[randomIndex];
      resultElement.innerHTML = `<p>${randomOption}</p>`;
      resultElement.style.opacity = 1;

      // Update character avatar
      const randomString = Math.random().toString(36).substring(7);
      characterImg.src = `https://api.dicebear.com/9.x/adventurer/svg?seed=${randomString}&backgroundColor=f2d3d3`;
    }, 500);
  });
});