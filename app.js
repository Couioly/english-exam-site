const pages = [
  { id: "translation", label: "翻译题", title: "汉译英翻译" },
  { id: "listening", label: "听力题", title: "听力选项练习" },
  { id: "inReading", label: "课内阅读", title: "Text A / Comprehension Check" },
  { id: "outReading", label: "课外阅读", title: "Session C Passages" },
  { id: "cloze", label: "选词填空", title: "Reading Comprehension" },
  { id: "vocabulary", label: "词汇题", title: "Unit 1-2 词汇填空" }
];

const data = {
  translation: {
    title: "25-06-1 四级真题（翻译）",
    prompt: "近年来，中国越来越多的城市着力打造 “15 分钟便民生活圈 (convenient living circles)”。社区居民步行 15 分钟就能享受到日常所需的公共服务。生活圈内建有便利店、公园、健身场地、图书馆、学校、社区食堂、诊所等。生活圈的建立能够为居民提供更加便利、舒适、友好、愉悦的生活环境，更好地满足城市居民多元化的日常生活服务需求，提升居民的生活品质和幸福感。",
    answer: 'In recent years, a growing number of cities in China have been committed to building "15-minute convenient living circles", where community residents can access public services needed in daily life within a 15-minute walk from home. These living circles are equipped with a full range of facilities including convenience stores, parks, fitness areas, libraries, schools, community canteens, and clinics. The construction of such circles serves to provide residents with a more convenient, comfortable, friendly and pleasant living environment, better fulfilling their diverse needs for daily living services, and ultimately enhancing their quality of life and sense of well-being.'
  },
  listening: [
    {
      title: "Unit 1 - Conversation",
      questions: [
        q(["A Get up late.", "B Drink a lot of coffee.", "C Make her work plans.", "D Do physical activity."], "D"),
        q(["A He can arrange more time for social life at night.", "B He can have less difficulty coping with meetings.", "C He can enjoy a less distracting work environment.", "D He can be more focused and productive during the day."], "C"),
        q(["A One's sleep quality.", "B One's work schedule.", "C One's individual body clock.", "D One's attitude toward morning exercise."], "C"),
        q(["A Sleep less to get more work done.", "B Change their natural rhythm to match that of others.", "C Follow a fixed routine regardless of external distractions.", "D Listen to their body and adjust their schedule accordingly."], "D")
      ]
    },
    {
      title: "Unit 1 - Passage",
      questions: [
        q(["A The quick tasks.", "B The routine tasks.", "C The most urgent tasks.", "D The most difficult tasks."], "A"),
        q(["A Getting up as early as possible to work.", "B Being a night owl and working late at night.", "C Using emails to improve work efficiency.", "D Making use of one's most productive time of day."], "D"),
        q(["A She checks and responds to them constantly.", "B She accesses them only during her real work hours.", "C She no longer responds to the most trivial of them.", "D She opens her inbox only when it's totally necessary."], "D"),
        q(["A To discuss the importance of email.", "B To show how to balance work and life.", "C To share some ideas on how to reduce workload.", "D To give some tips on how to work more efficiently."], "D")
      ]
    },
    {
      title: "Unit 2 - Conversation",
      questions: [
        q(["A Learning to swim.", "B Finding a well-paid job.", "C Seeing her husband soon.", "D Getting married in a big house."], "B"),
        q(["A He had a hard time keeping his marriage.", "B He got really sick and lost all his valuable things.", "C He lost his job and wealth and was sick for years.", "D He was unable to see his children due to poor health."], "C"),
        q(["A It helps one value little things in life.", "B It makes couples appreciate each other.", "C It gives people patience in their job search.", "D It makes people confident in pursuing their goals."], "B"),
        q(["A To tell the woman an interesting life story.", "B To teach the woman skills to find a good job.", "C To encourage the woman to pursue a happy marriage.", "D To give the woman advice on the important things in life."], "D")
      ]
    },
    {
      title: "Unit 2 - Passage",
      questions: [
        q(["A The proportion of 15- to 50-year-olds will decrease slightly.", "B The number of people aged 80 and above will increase by about 22%.", "C The proportion of people aged 60 and above will increase significantly.", "D The number of 12- to 22-year-olds will decrease by more than 420 million."], "C"),
        q(["A Economic productivity is constantly rising.", "B The range of healthcare services is expanding.", "C The pension system will be replaced in the near future.", "D The ratio of working-age people to older people is decreasing."], "D"),
        q(["A Instability of housing prices.", "B Changes in family structure.", "C An increase in property taxation.", "D A decrease in population mobility."], "B"),
        q(["A Strong trade ties between countries around the world.", "B Effective policies to reduce social and health costs.", "C Necessary changes to address the needs of older people.", "D Rich resources to maintain the traditional family structure."], "C")
      ]
    }
  ],
  inReading: [
    {
      title: "Unit 1 / Text A / Comprehension Check",
      questions: [
        q(["A) simile", "B) metaphor", "C) hyperbole", "D) irony"], "B", "The rhetoric device used in the phrase “blood ties” (Para. 1) is ______."),
        q(["A) wealth", "B) animals", "C) climate", "D) plants"], "A", "Man changes the following except ______ when he transforms nature."),
        q(["A) forced animals to retreat into forests", "B) worshiped nature for its destructive powers", "C) tried hard to find ways to live outside nature", "D) worked collectively to change their surroundings"], "D", "In order to develop the civilization, humans ______."),
        q(["A) The difficulties in getting natural resources", "B) The complex problem of eliminating waste", "C) The development of modern technology", "D) Young people's neglect of their health"], "B", "______ is not a reason for man to use synthetic goods."),
        q(["A) Rational and wise organization of production", "B) The development of modern technology", "C) Producing an abundance of synthetic goods", "D) Young people's neglect of their health"], "C", "______ is not suggested as a way to deal with the crisis of the ecological situation.")
      ]
    },
    {
      title: "Unit 2 / Text A / Comprehension Check",
      questions: [
        q(["A) Longer life expectancy", "B) Cheaper goods", "C) Increased income", "D) Fragile privacy"], "D", "Which of the following is NOT a technological advantage? ______."),
        q(["A) The Industrial Revolution", "B) 1946", "C) 1970s", "D) World War II"], "A", "Social critics and philosophers began studying the relationship between happiness and technology since ______."),
        q(["A) Technology develops so fast", "B) Poverty is strongly correlated with misery", "C) People don’t feel happier in the prosperous era", "D) Americans work extraordinarily hard"], "C", "The example of lottery winners is to illustrate why ______."),
        q(["A) Jet travel", "B) Telemarketing", "C) Traffic jams", "D) Identity theft"], "A", "Which of the following is NOT a technological disadvantage? ______."),
        q(["A) pessimistic", "B) positive", "C) critical", "D) neutral"], "B", "The author had a ______ tone when he talks about the impact of medical technology on people’s sense of well-being.")
      ]
    }
  ],
  outReading: [
    {
      title: "Session C Passages One",
      questions: [
        q(["A) It sees lots of personal income wasted on beauty products.", "B) It considers one’s physical appearance very important.", "C) It places a high value on the physical fitness of stars.", "D) It expects every individual to look their very best."], "B", "46. What do we learn about American society from the first paragraph?"),
        q(["A) They have to get prepared for resentment and bitter court battles.", "B) They are better able to gain attention, love, and personal connection.", "C) They may neglect to cultivate the inner qualities that matter more.", "D) They feel much of their precious time, energy and resources is wasted."], "C", "47. What happens when people strive to look better?"),
        q(["A) It may be inherited or cultivated.", "B) It may lead to bad as well as good habits.", "C) It may create connection or isolation.", "D) It may do as much harm as good."], "D", "48. What does the author say about outer beauty?"),
        q(["A) Meeting of minds.", "B) Attraction at first sight.", "C) Physical chemistry.", "D) Frequent interaction."], "A", "49. What brings about spiritual connection?"),
        q(["A) We may find a route toward other people’s souls.", "B) We may be appreciated more by people around us.", "C) We will meet people who value us for who we are.", "D) We will be discouraged from revealing our true selves."], "C", "50. What happens when we take the path toward cultivating inner beauty?")
      ]
    },
    {
      title: "Session C Passages Two",
      questions: [
        q(["A) An increasing interest in their analyses.", "B) An enormous effort in their promotion.", "C) A huge boost in their consumption.", "D) A noticeable surge in their varieties."], "C", "51. What can we expect of plant-based meats?"),
        q(["A) They are mostly non-vegetarians.", "B) They are mostly animal-rights advocates.", "C) Most of them refrain from eating meat for health reasons.", "D) Most of them eat meatless meat to protect the environment."], "A", "52. What do we learn about consumers buying Beyond Burger and Impossible Foods products?"),
        q(["A) They more often appeal to meat-eaters.", "B) They very much resemble animal meat.", "C) Some have become its signature dishes.", "D) Most of them are sold as true fake meat."], "B", "53. What can we conclude about Impossible Foods' products from Joan Solsman's remark?"),
        q(["A) It frees people from any known link to cancer.", "B) It provides all the nutrients for staying healthy.", "C) It helps maintain normal blood pressure and blood sugar.", "D) It reduces various health risks posed by meat consumption."], "D", "54. Why can the habit of eating a plant-based diet lead to better health?"),
        q(["A) Naturally produced foods.", "B) Processed protein substitutes.", "C) Red meats like traditional beef.", "D) New generations of alternate meat."], "A", "55. What does the author recommend we eat at the end of the passage?")
      ]
    }
  ],
  cloze: {
    options: [
      ["A", "adapt"], ["B", "hardly"], ["C", "indicates"], ["D", "insist"], ["E", "literature"],
      ["F", "organ"], ["G", "particularly"], ["H", "remaining"], ["I", "responsible"], ["J", "retained"],
      ["K", "still"], ["L", "strategy"], ["M", "transformed"], ["N", "underlines"], ["O", "visual"]
    ],
    answers: ["G", "F", "H", "C", "E", "A", "I", "K", "O", "J"],
    paragraphs: [
      "The human brain has the ability to constantly form new networks and connections between brain cells. This means the brain has an almost magical ability to change. This characteristic is {0} apparent in a new study, focusing on people who underwent a hemispherectomy, a surgical procedure in which half of the brain is removed to treat illness.",
      "The findings showed that, despite missing half of this critical {1}, participants could function well. This was because the {2} half of their brain strengthened. In fact, researchers found that connections — and thus communication — between parts of different brain networks are actually stronger in people who had hemispherectomies than in people with intact brains. This {3} that the brain is able to compensate for loss of certain brain structure.",
      "There are many other cases in the medical {4} that document the brain’s amazing ability to {5}. For example, a young boy had a significant portion of his brain removed for medical reasons, which included the part of the brain {6} for sight. But a few years after his surgery, scientists found that he could {7} see. They determined that this was because other parts of his brain took over the missing part’s {8} tasks. Another study involved people who could smell, despite missing the region in the brain that processes information about smells. Though they are not sure how these individuals {9} the ability to smell, scientists believe it is possible that another part of the brain took on that task."
    ]
  },
  vocabulary: [
    v("Unit 1", "If you had had a [spark] of consideration for your family, you wouldn’t have taken so many stupid risks.", "spark", "如果你对你的家庭有[一点点]关心，你就不会冒那么多愚蠢的风险。"),
    v("Unit 1", "Due to the lack of an adequate labor force, even women in this village were [compelled] to work in the coal mines.", "compelled", "由于缺乏足够的劳动力，这个村子里的妇女甚至[被迫]去煤矿工作。"),
    v("Unit 1", "We went through lovely countryside with great mountains, some of them beautiful and green and wooded, while others [bare] and wild.", "bare", "我们穿过了美丽的乡村，那里有高大的山脉，有些山美丽翠绿、树木繁茂，而另一些则[光秃秃]的、充满野性。"),
    v("Unit 1", "The cleaner took off his coat and began to [scrape] the ashes from the furnace with his bare hands.", "scrape", "清洁工脱掉外套，开始赤手将炉灰[刮]下来。"),
    v("Unit 1", "People in that area are already threatened with environmental [destruction] since 60% of the forest there has been destroyed.", "destruction", "那个地区的人们已经受到环境[破坏]的威胁，因为那里60%的森林已经被毁掉了。"),
    v("Unit 1", "The auto company has seen a huge increase in the [output] of private cars this year due to the improved working efficiency.", "output", "由于工作效率的提高，这家汽车公司今年的私家车[产量]大幅增加。"),
    v("Unit 1", "Under severe attack from enemy aircraft, the troops were forced to [retreat] from the front.", "retreat", "在敌机的猛烈攻击下，部队被迫从前线[撤退]。"),
    v("Unit 1", "When I came up to a giraffe lying on the grasses, I found that it had been killed with a spear [tipped] with poison.", "tipped", "当我走近一只倒在草地上的长颈鹿时，发现它是被[涂]了毒药的矛杀死的。"),
    v("Unit 1", "He stayed eight days in an open boat with no food, and he was still alive; his survival was a [miracle].", "miracle", "他在一艘无遮无盖的小船上呆了八天，没有食物，却仍然活着；他的幸存是一个[奇迹]。"),
    v("Unit 1", "Survival of the Fittest is an [eternal] truth of nature.", "eternal", "适者生存是自然界[永恒]的真理。"),
    v("Unit 1", "His heart sank when he saw the fresh [pile] of mails, memos and telephone messages on his desk.", "pile", "当他看到办公桌上新送来的[一堆]邮件、备忘录和电话留言时，他的心沉了下去。"),
    v("Unit 1", "The military government refused to [transfer] power to a democratically elected civilian government.", "transfer", "军政府拒绝将权力[移交]给民选文职政府。"),
    v("Unit 1", "In that area nearly six million people are affected by the drought and the civil war, and there is a real danger of [mass] starvation.", "mass", "在那个地区，近六百万人受到干旱和内战的影响，存在[大规模]饥荒的真正危险。"),
    v("Unit 1", "Postal service personnel who are severely irresponsible purposely delay sending mail, [thereby] giving rise to great loss of public trust.", "thereby", "严重不负责任的邮政人员故意拖延寄信，[从而]导致公众信任的巨大损失。"),
    v("Unit 1", "With the increase in the number of foreign funded enterprises, various kinds of financial disputes [have emerged].", "have emerged", "随着外资企业数量的增加，各种金融纠纷也[出现了]。"),
    v("Unit 1", "The earthquake may [trigger] landslides that cause great damage and loss of life.", "trigger", "地震可能[引发]山体滑坡，造成巨大的破坏和生命损失。"),
    v("Unit 1", "Deforestation and global warming [threaten] to ruin the current and future state of our environment.", "threaten", "森林砍伐和全球变暖[有可能破坏]我们环境的现状和未来。"),
    v("Unit 1", "It was reported that almost 7 million liters [were consumed] during the 16-day beer festival in Germany that year.", "were consumed", "据报道，那年德国为期16天的啤酒节期间，[消费了]近700万升啤酒。"),
    v("Unit 1", "On a bitterly cold night, the only shelter he could find was the [hollow] trunk of a great tree.", "hollow", "在一个严寒的夜晚，他唯一能找到的栖身之处是一棵大树的[空心]树干。"),
    v("Unit 1", "Shortly after the government’s new policy was put into effect, the economy of our country began to [show signs of] recovery.", "show signs of", "政府新政策实施后不久，我国经济开始[显现出]复苏的[迹象]。"),
    v("Unit 1", "We knew well what difficulties we had to [cope with] in bringing our work to a successful conclusion.", "cope with", "我们很清楚要成功完成工作需要[应对]哪些困难。"),
    v("Unit 1", "She [lived in fear of] getting injured and never participated in any violent sports games.", "lived in fear of", "她[一直担心]受伤，从不参加任何激烈的体育运动。"),
    v("Unit 1", "It looks like this snow will stop the food supplies and we shall be hungry for a time, but we’ve no choice but to [tough it out].", "tough it out", "看来这场雪会阻断食物供应，我们将要挨饿一段时间，但我们别无选择，只能[硬撑过去]。"),
    v("Unit 1", "Many trees in this area have been [cut down] to make room for buildings, which has worsened our living environment.", "cut down", "这个地区的许多树木被[砍伐]，为建筑腾出空间，这恶化了我们的居住环境。"),
    v("Unit 1", "In order to avoid possible infection by the unknown viruses, researchers are protected [from head to foot] with caps, face masks and white gowns.", "from head to foot", "为了避免被未知病毒感染，研究人员戴着帽子、口罩，穿着白色防护服，[从头到脚]都保护了起来。"),
    v("Unit 1", "Despite the warm weather the explorers [searched out] some snow on the northern slope and boiled it for drinking water.", "searched out", "尽管天气温暖，探险者们还是在北坡[找到了]一些雪，并将其烧开作为饮用水。"),
    v("Unit 1", "Starting bare-handed, you have built up so many steel plants. This is [nothing short of] miraculous!", "nothing short of", "白手起家，你们建起了这么多钢铁厂。这[简直是]奇迹！"),
    v("Unit 1", "[As yet] we haven’t felt the need for any extra hands, but it’s only a matter of time.", "As yet", "[到目前为止]我们还没感到需要帮手，但这只是时间问题。"),
    v("Unit 1", "While one cannot choose one’s birthplace, one can certainly decide, based on what one has experienced, the best place to [settle in].", "settle in", "虽然一个人无法选择自己的出生地，但可以根据自己的经历来决定最适合[定居]的地方。"),
    v("Unit 1", "Parents who spend time and money teaching their children music can [take heart] from a new Canadian study, which shows young children who take music lessons have better memories than their nonmusical peers.", "take heart", "花钱花时间教孩子音乐的父母可以[感到鼓舞]，因为加拿大一项新研究表明，上音乐课的小孩比同龄不上音乐课的小孩记忆力更好。"),
    v("Unit 2", "Studies show that if a working environment is pleasant, [productivity] increases.", "productivity", "研究表明，若工作环境舒适宜人，【工作效率】便会提升。"),
    v("Unit 2", "Private space travel is a relatively new [phenomenon]. It’s difficult at the moment to assess its effects.", "phenomenon", "私人太空旅行是一个相对较新的【现象】。目前很难评估其影响。"),
    v("Unit 2", "All of us need to build up relationships with others unless we choose to live in complete [isolation] from the outside world.", "isolation", "我们所有人都需要与他人建立关系，除非我们选择与外界完全【隔绝】。"),
    v("Unit 2", "Since sending her child to the kindergarten, she has been delighted to see a(n) [gradual] change in the boy’s character; he seems less self-centered now.", "gradual", "自从把孩子送进幼儿园，她高兴地看到男孩的性格发生了【逐渐的】变化；他现在似乎不那么以自我为中心了。"),
    v("Unit 2", "As an active environmentalist, Davis has earned a reputation as an outspoken [opponent] of any kind of nuclear waste dumping at sea.", "opponent", "作为一名活跃的环保主义者，戴维斯赢得了直言不讳地【反对】任何向海洋倾倒核废料的【人士】的声誉。"),
    v("Unit 2", "Quills were the chief writing tool from the 6th century until the [advent] of steel pens in the mid 19th century.", "advent", "从6世纪到19世纪中期钢笔【出现】之前，羽毛笔一直是主要的书写工具。"),
    v("Unit 2", "Do you think it will ever be possible to alter human [genetic] code in order to produce the “perfect” human being?", "genetic", "你认为有可能改变人类【基因】密码以制造出“完美”的人类吗？"),
    v("Unit 2", "In the end her sheer competence and professionalism won [universal] respect within and out of the government.", "universal", "最终，她纯粹的能力和专业精神赢得了政府内外的【普遍】尊重。"),
    v("Unit 2", "His political views are rather [extreme]; I hate to discuss anything with him.", "extreme", "他的政治观点相当【极端】；我讨厌和他讨论任何事。"),
    v("Unit 2", "The cheap perfume you see on special offer in petrol stations often smells [nasty] after a couple of hours.", "nasty", "你在加油站特价看到的廉价香水，几小时后通常闻起来很【难闻】。"),
    v("Unit 2", "The consumer [boom] of the 1980s led to an explosion of shopping centre development in big cities around the country.", "boom", "20世纪80年代的消费【繁荣】导致了全国各大城市购物中心开发的激增。"),
    v("Unit 2", "You shouldn’t use “Yours faithfully”—it’s too [formal] for this kind of personal letter.", "formal", "你不应该使用“Yours faithfully”——对于这种私人信件来说太【正式】了。"),
    v("Unit 2", "According to a(n) [survey] among 1000 residents, garbage collection service in the city is far from satisfactory.", "survey", "根据对1000名居民的【调查】，该市的垃圾收集服务远不能令人满意。"),
    v("Unit 2", "The cost of food and clothing has come down in recent years. [Similarly], fuel prices have fallen quite considerably.", "Similarly", "近年来食品和服装的成本下降了。【同样地】，燃料价格也大幅下跌。"),
    v("Unit 2", "The technicians are working hard to [modify] the design of the new car to make it more competitive in the overseas market.", "modify", "技术人员正在努力【修改】新款汽车的设计，使其在海外市场更具竞争力。"),
    v("Unit 2", "In my childhood memories, we were living a(n) [rough] but happy life, with no luxuries to speak of.", "rough", "在我的童年记忆里，我们过着【艰苦】却幸福的生活，谈不上任何奢华享受。"),
    v("Unit 2", "The two runners reached the finish line almost [at the same time]. Who came in first was indistinguishable to the naked eye.", "at the same time", "两名赛跑选手几乎【同时】冲过终点线。肉眼根本分辨不出谁率先抵达。"),
    v("Unit 2", "As a result of the recent financial collapse, many people [are stuck with] worthless investments.", "are stuck with", "由于近期金融崩盘，许多人被【套牢在】了毫无价值的投资上。"),
    v("Unit 2", "The survey suggests that many college students don’t know [for certain] what kind of job is suitable for them.", "for certain", "调查显示，许多大学生不【确定】什么样的工作适合他们。"),
    v("Unit 2", "You can ask him again if you like, but it would [make no difference] – he will still say no to you.", "make no difference", "如果你愿意可以再问他，但这【没有区别】——他仍然会拒绝你。"),
    v("Unit 2", "The doctor explained that [on average] people who don’t smoke are healthier than those who do.", "on average", "医生解释说，[平均而言]不吸烟的人比吸烟的人更健康。"),
    v("Unit 2", "I'm familiar with the operating system installed on the computer, but [when it comes to] repairing the machine I don't know a thing.", "when it comes to", "我很熟悉电脑所安装的操作系统，【但说到】维修这台设备，我完全一窍不通。"),
    v("Unit 2", "Although peasants in some areas [are better off] now, those in many other areas still live in poverty.", "are better off", "虽然部分地区的农民如今【生活有所改善】，但其他许多地区的农民仍生活在贫困之中。"),
    v("Unit 2", "The new staff insisted that opportunities for promotion should be [built into] the work contract.", "built into", "新员工坚持认为，晋升机会应当【纳入】劳动合同之中。"),
    v("Unit 2", "As they are discussing influential modern artists, three names immediately [come to mind].", "come to mind", "当他们讨论极具影响力的现代艺术家时，有三个名字立刻【浮现在脑海中】。"),
    v("Unit 2", "I don't know the exact number, but there are [close to] three million unemployed at present.", "close to", "我不知道确切数字，但目前失业人数【接近】三百万。"),
    v("Unit 2", "Considering the recent storms and landslides, I am certainly not [in favor of] an outing in this weather.", "in favor of", "考虑到近期的暴风雨和山体滑坡，我当然【不赞成】在这种天气外出游玩。")
  ]
};

let state = {
  page: "translation",
  answers: {},
  checked: {},
  vocabOptions: []
};

function q(options, answer, stem = "") {
  return { stem, options, answer };
}

function v(unit, sentence, answer, chinese) {
  return { unit, sentence, answer, chinese };
}

function init() {
  state.vocabOptions = buildVocabOptions();
  renderNav();
  render();
}

function renderNav() {
  const nav = document.querySelector("#nav");
  nav.innerHTML = pages.map(page => `<button class="${page.id === state.page ? "active" : ""}" data-page="${page.id}">${page.label}</button>`).join("");
  nav.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      state.page = button.dataset.page;
      renderNav();
      render();
    });
  });
}

function render() {
  const page = pages.find(item => item.id === state.page);
  document.querySelector("#page-title").textContent = page.title;
  document.querySelector("#content").innerHTML = "";
  if (state.page === "translation") renderTranslation();
  if (state.page === "listening") renderGroupedChoice("listening");
  if (state.page === "inReading") renderGroupedChoice("inReading");
  if (state.page === "outReading") renderGroupedChoice("outReading");
  if (state.page === "cloze") renderCloze();
  if (state.page === "vocabulary") renderVocabulary();
}

function renderTranslation() {
  const content = document.querySelector("#content");
  document.querySelector("#page-stats").textContent = "1 篇参考译文";
  content.innerHTML = `
    <article class="translation-panel">
      <h3>${data.translation.title}</h3>
      <div class="prompt">${data.translation.prompt}</div>
      <textarea placeholder="在这里输入你的英文译文..."></textarea>
      <div class="actions">
        <button class="btn" id="show-translation">查看参考译文</button>
      </div>
      <div id="translation-answer"></div>
    </article>
  `;
  document.querySelector("#show-translation").addEventListener("click", () => {
    document.querySelector("#translation-answer").innerHTML = `<div class="answer-box">${data.translation.answer}</div>`;
  });
}

function renderGroupedChoice(kind) {
  const groups = data[kind];
  const total = groups.reduce((sum, group) => sum + group.questions.length, 0);
  document.querySelector("#page-stats").textContent = `${groups.length} 组 / ${total} 题`;
  const content = document.querySelector("#content");
  content.innerHTML = groups.map((group, groupIndex) => `
    <article class="section">
      <div class="section-header">
        <h3>${group.title}</h3>
        <button class="btn secondary" data-check-section="${kind}-${groupIndex}">校验本组</button>
      </div>
      <div class="section-body">
        ${group.questions.map((question, questionIndex) => renderChoiceQuestion(kind, groupIndex, questionIndex, question)).join("")}
      </div>
    </article>
  `).join("");
  bindChoiceEvents(kind);
}

function renderChoiceQuestion(kind, groupIndex, questionIndex, question) {
  const id = `${kind}-${groupIndex}-${questionIndex}`;
  const selected = state.answers[id] || "";
  const checked = state.checked[id];
  const result = checked ? resultHtml(selected === question.answer, `正确答案：${question.answer}`) : "";
  return `
    <div class="question" id="card-${id}">
      <p class="question-title">${question.stem || `第 ${questionIndex + 1} 题`}</p>
      <div class="options">
        ${question.options.map(option => {
          const letter = option.trim().charAt(0);
          return `
            <label class="option">
              <input type="radio" name="${id}" value="${letter}" ${selected === letter ? "checked" : ""}>
              <span>${option}</span>
            </label>
          `;
        }).join("")}
      </div>
      <div class="actions">
        <button class="btn secondary" data-check="${id}">校验本题</button>
      </div>
      ${result}
    </div>
  `;
}

function bindChoiceEvents(kind) {
  document.querySelectorAll("input[type='radio']").forEach(input => {
    input.addEventListener("change", event => {
      state.answers[event.target.name] = event.target.value;
      state.checked[event.target.name] = false;
    });
  });
  document.querySelectorAll("[data-check]").forEach(button => {
    button.addEventListener("click", () => {
      state.checked[button.dataset.check] = true;
      renderGroupedChoice(kind);
    });
  });
  document.querySelectorAll("[data-check-section]").forEach(button => {
    button.addEventListener("click", () => {
      const [, groupIndex] = button.dataset.checkSection.split("-");
      data[kind][Number(groupIndex)].questions.forEach((_, questionIndex) => {
        state.checked[`${kind}-${groupIndex}-${questionIndex}`] = true;
      });
      renderGroupedChoice(kind);
    });
  });
}

function renderCloze() {
  document.querySelector("#page-stats").textContent = "10 空 / 15 选项";
  const options = data.cloze.options;
  const content = document.querySelector("#content");
  content.innerHTML = `
    <article class="cloze-panel">
      <h3>Reading Comprehension</h3>
      <div class="word-bank">${options.map(([letter, word]) => `<span class="bank-item">${letter}) ${word}</span>`).join("")}</div>
      <div class="cloze-text">
        ${data.cloze.paragraphs.map(paragraph => `<p>${paragraph.replace(/\{(\d+)\}/g, (_, index) => renderClozeSelect(Number(index), options))}</p>`).join("")}
      </div>
      <div class="actions">
        <button class="btn" id="check-cloze">校验答案</button>
        <button class="btn secondary" id="reset-cloze">清空选择</button>
      </div>
      <div id="cloze-result"></div>
    </article>
  `;
  document.querySelectorAll(".blank-select").forEach(select => {
    select.value = state.answers[`cloze-${select.dataset.index}`] || "";
    select.addEventListener("change", event => {
      state.answers[`cloze-${event.target.dataset.index}`] = event.target.value;
    });
  });
  document.querySelector("#check-cloze").addEventListener("click", checkCloze);
  document.querySelector("#reset-cloze").addEventListener("click", () => {
    data.cloze.answers.forEach((_, index) => delete state.answers[`cloze-${index}`]);
    renderCloze();
  });
}

function renderClozeSelect(index, options) {
  return `<select class="blank-select" data-index="${index}">
    <option value="">${index + 1}. 选择</option>
    ${options.map(([letter, word]) => `<option value="${letter}">${letter}) ${word}</option>`).join("")}
  </select>`;
}

function checkCloze() {
  let correct = 0;
  const detail = data.cloze.answers.map((answer, index) => {
    const selected = state.answers[`cloze-${index}`] || "";
    const ok = selected === answer;
    if (ok) correct += 1;
    return `<span class="bank-item">${index + 1}: ${ok ? "正确" : `应为 ${answer}`}</span>`;
  }).join("");
  document.querySelector("#cloze-result").innerHTML = `<div class="answer-box"><div class="score">${correct} / ${data.cloze.answers.length}</div><div class="word-bank">${detail}</div></div>`;
}

function renderVocabulary() {
  const grouped = groupBy(data.vocabulary, item => item.unit);
  document.querySelector("#page-stats").textContent = `${data.vocabulary.length} 题 / 随机干扰项`;
  const content = document.querySelector("#content");
  content.innerHTML = `
    <div class="actions" style="margin-bottom: 18px;">
      <button class="btn" id="reshuffle">重新生成干扰项</button>
    </div>
    ${Object.entries(grouped).map(([unit, items]) => `
      <article class="section">
        <div class="section-header">
          <h3>${unit}</h3>
          <button class="btn secondary" data-check-vocab-unit="${unit}">校验本单元</button>
        </div>
        <div class="section-body">
          ${items.map(item => renderVocabQuestion(data.vocabulary.indexOf(item), item)).join("")}
        </div>
      </article>
    `).join("")}
  `;
  bindVocabEvents();
}

function renderVocabQuestion(index, item) {
  const id = `vocab-${index}`;
  const checked = state.checked[id];
  const selected = state.answers[id] || "";
  const questionText = item.sentence.replace(`[${item.answer}]`, "______");
  const result = checked ? `${resultHtml(selected === item.answer, `正确答案：${item.answer}`)}<div class="hint-box">${item.chinese}</div>` : "";
  return `
    <div class="question" id="card-${id}">
      <p class="question-title">${index + 1}. ${questionText}</p>
      <div class="options">
        ${state.vocabOptions[index].map(option => `
          <label class="option">
            <input type="radio" name="${id}" value="${escapeAttr(option)}" ${selected === option ? "checked" : ""}>
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
      <div class="actions">
        <button class="btn secondary" data-check-vocab="${id}">校验本题</button>
      </div>
      ${result}
    </div>
  `;
}

function bindVocabEvents() {
  document.querySelector("#reshuffle").addEventListener("click", () => {
    state.vocabOptions = buildVocabOptions();
    state.answers = Object.fromEntries(Object.entries(state.answers).filter(([key]) => !key.startsWith("vocab-")));
    state.checked = Object.fromEntries(Object.entries(state.checked).filter(([key]) => !key.startsWith("vocab-")));
    renderVocabulary();
  });
  document.querySelectorAll("input[type='radio']").forEach(input => {
    input.addEventListener("change", event => {
      state.answers[event.target.name] = event.target.value;
      state.checked[event.target.name] = false;
    });
  });
  document.querySelectorAll("[data-check-vocab]").forEach(button => {
    button.addEventListener("click", () => {
      state.checked[button.dataset.checkVocab] = true;
      renderVocabulary();
    });
  });
  document.querySelectorAll("[data-check-vocab-unit]").forEach(button => {
    button.addEventListener("click", () => {
      data.vocabulary.forEach((item, index) => {
        if (item.unit === button.dataset.checkVocabUnit) state.checked[`vocab-${index}`] = true;
      });
      renderVocabulary();
    });
  });
}

function buildVocabOptions() {
  const pool = data.vocabulary.map(item => item.answer);
  return data.vocabulary.map(item => shuffle([item.answer, ...shuffle(pool.filter(answer => answer !== item.answer)).slice(0, 3)]));
}

function resultHtml(ok, answer) {
  return `<div class="result ${ok ? "good" : "bad"}">${ok ? "回答正确" : `回答错误，${answer}`}</div>`;
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function groupBy(list, keyFn) {
  return list.reduce((groups, item) => {
    const key = keyFn(item);
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});
}

function escapeAttr(text) {
  return String(text).replace(/"/g, "&quot;");
}

init();
