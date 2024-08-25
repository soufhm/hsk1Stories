const currentStory = document.getElementById('current-story');
const previousButton = document.getElementById('previous-story');
const nextButton = document.getElementById('next-story');
const translateZhButton = document.getElementById('translate-zh');
const translateArButton = document.getElementById('translate-ar');
const translateEnButton = document.getElementById('translate-en');
const storyNumber = document.getElementById('story-number');
const storyInput = document.getElementById('story-input');
const goToStoryButton = document.getElementById('go-to-story');
const audioPlayer = document.getElementById('audio-player');
const playAudioButton = document.getElementById('play-audio');
let currentStoryIndex = 0;
let stories = [
    {
        chinese: "今天，我和朋友去商店买了水果和茶。下午，我们在学校里坐着聊天。看见一只狗，我们都很高兴。晚上，我们一起看电影。电影很好看。回家后，我早早睡觉了",
        arabic: "اليوم، أنا و صديقي ذهبنا إلى المتجر واشترينا فاكهة وشاي. في المساء، جلسنا في المدرسة وتحدثنا. شاهدنا كلباً، شعرنا بالسعادة. بعد ذلك، ذهبنا معًا لمشاهدة فيلم. كان الفيلم جيدًا. بعد العودة إلى المنزل، نمت مبكرًا.", 
        english: "Today, my friend and I went to the store and bought some fruit and tea. In the afternoon, we sat in the school and chatted. We saw a dog, and we felt happy. In the evening, we watched a movie together. The movie was good. After returning home, I went to bed early.",
        audioSrc: "audio/story1.mp3" 
    },
    {
        chinese: "故事二： 后面 哪儿 商店 喜欢 多少 天气 女儿 妈妈 学习 学校 学生 小姐 工作 怎么 我们 时候 明天 星期 昨天 朋友 杯子 桌子 椅子 水果 汉语 没有 漂亮 爸爸 现在 电影 电视 电脑 看见 睡觉 米饭 老师 苹果 衣服 认识 谢谢 飞机 饭店 高兴 一点儿 不客气 出租车 对不起 怎么样 打电话 没关系",
        arabic: "قصة 2:  كانت الفتاة اسمها يانغ. كانت يانغ طالبة في المدرسة. كانت يانغ تحب أن تلعب البيانو. كانت يانغ ذكية جدا. كانت يانغ تحب أن تتعلم اللغة الإنجليزية. كانت يانغ تحلم بأن تصبح معلمة.", 
        english: "Story 2: The girl's name was Yang. Yang was a student at the school. Yang loved to play the piano. Yang was very smart. Yang loved to learn English. Yang dreamed of becoming a teacher.",
        audioSrc: "story2.mp3" 
    },
    // ... continue with your 30 stories 
    {
        chinese: "故事三十： 上 不 个 书 买 了 些 人 他 会 住 你 做 写 冷 几 去 叫 号 吃 吗 听 呢 和 哪 喂 喝 回 在 坐 块 多 大 太 她 好 字 家 小 少 岁 年 开 很 想 我 是 月 有 本 来 水 点 热 爱 狗 猫 的 看 能 茶 菜 说 请 读 谁 这 那 都 里 钱 一 七 三 下 九 二 五 八 六 十 四 上午 下午 下雨 东西 中午 中国 什么 今天 儿子 先生 再见 分钟 前面 北京 医生 医院 同学 名字",
        arabic: "قصة 30: ...", 
        english: "Story 30: ...", 
        audioSrc: "story30.mp3" 
    }
];

function updateStory() {
    currentStory.textContent = stories[currentStoryIndex].chinese;
    storyNumber.textContent = `故事 ${currentStoryIndex + 1}`;
    updateButtonStates();
    currentStory.classList.remove('ar');
    audioPlayer.src = stories[currentStoryIndex].audioSrc; 
    audioPlayer.setAttribute("controls", "controls");

    // Prevent downloading
    audioPlayer.oncontextmenu = function(event) {
        event.preventDefault();
    };
    audioPlayer.onmousedown = function(event) {
        if (event.button === 2) {
            event.preventDefault();
        }
    };
    audioPlayer.addEventListener('click', function() {
        this.play();
    });
}

function updateButtonStates() {
    previousButton.disabled = currentStoryIndex === 0;
    nextButton.disabled = currentStoryIndex === stories.length - 1;
}

function translateStory(language) {
    if (language === 'ar') {
        currentStory.textContent = stories[currentStoryIndex].arabic;
        currentStory.classList.add('ar');
    } else if (language === 'en') {
        currentStory.textContent = stories[currentStoryIndex].english;
        currentStory.classList.remove('ar');
    } else if (language === 'zh') {
        currentStory.textContent = stories[currentStoryIndex].chinese;
        currentStory.classList.remove('ar');
    }
}

function goToStory(index) {
    if (index >= 1 && index <= stories.length) {
        currentStoryIndex = index - 1;
        updateStory();
    }
}

function playAudio() {
    audioPlayer.play();
}

updateStory();

previousButton.addEventListener('click', () => {
    currentStoryIndex--;
    updateStory();
});

nextButton.addEventListener('click', () => {
    currentStoryIndex++;
    updateStory();
});

translateZhButton.addEventListener('click', () => {
    translateStory('zh');
});

translateArButton.addEventListener('click', () => {
    translateStory('ar');
});

translateEnButton.addEventListener('click', () => {
    translateStory('en');
});

goToStoryButton.addEventListener('click', () => {
    goToStory(parseInt(storyInput.value));
});

playAudioButton.addEventListener('click', playAudio); 
