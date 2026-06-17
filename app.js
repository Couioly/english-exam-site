const pages = [
  { id: "vocabulary", label: "词汇题", title: "Unit 1-2 词汇填空" },
  { id: "listening", label: "听力题", title: "听力选项练习" },
  { id: "inReading", label: "课内阅读", title: "Text A / Comprehension Check" },
  { id: "outReading", label: "课外阅读", title: "Session C Passages" },
  { id: "cloze", label: "选词填空", title: "Reading Comprehension" },
  { id: "translation", label: "翻译题", title: "汉译英翻译" }
];

const subjects = [
  { id: "english", label: "基础外语 IV", subtitle: "基础外语 IV", pages },
  {
    id: "algorithm",
    label: "算法分析与设计",
    subtitle: "算法分析与设计",
    pages: [
      { id: "algChoice", label: "选择题", title: "选择题" },
      { id: "algBlank", label: "填空题", title: "填空题" },
      { id: "algShort", label: "简答题", title: "简答题" },
      { id: "algDesign", label: "算法设计题", title: "算法设计题" }
    ]
  },
  {
    id: "software",
    label: "软件工程",
    subtitle: "软件工程",
    pages: [
      { id: "swChoice", label: "选择题", title: "选择题" },
      { id: "swBlank", label: "填空题", title: "填空题" },
      { id: "swJudge", label: "判断题", title: "判断题" },
      { id: "swShort", label: "简答与设计", title: "简答题及设计题相关知识点" }
    ]
  },
  {
    id: "computer",
    label: "计算机组成原理",
    subtitle: "计算机组成原理",
    pages: [
      { id: "coCh12", label: "第1-2章", title: "第1-2章" },
      { id: "coCh3", label: "第3章", title: "第3章" },
      { id: "coCh4", label: "第4章", title: "第4章" },
      { id: "coCh5", label: "第5章", title: "第5章" },
      { id: "coCh6", label: "第6章", title: "第6章" },
      { id: "coCh7", label: "第7章", title: "第7章" },
      { id: "coCh8", label: "第8章", title: "第8章" },
      { id: "coCh910", label: "第9-10章", title: "第9-10章" },
      { id: "coTerms", label: "填空及名词解释", title: "填空及名词解释" },
      { id: "coAll", label: "综合题库", title: "综合题库" }
    ]
  }
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

applyEnglishUpdates();

function applyEnglishUpdates() {
  data.listening.push(
    {
      title: "25-06-1 Section B - Conversation One",
      questions: [
        q([
          "A) She cannot avoid rush-hour traffic.",
          "B) The local government is inefficient.",
          "C) The city’s rush-hour traffic is intolerable.",
          "D) The city is too big to move around easily."
        ], "C", "8."),
        q([
          "A) Upgrading subway carriages.",
          "B) Increasing the number of bus routes.",
          "C) Learning from other big cities.",
          "D) Air conditioning the city’s subway."
        ], "D", "9."),
        q([
          "A) He takes a half-hour bus ride to work.",
          "B) He is fortunate to live very near to work.",
          "C) He suffers from rush-hour crowding too.",
          "D) He is going to move closer to his office."
        ], "A", "10."),
        q([
          "A) Tell her exactly what kind of property to look for.",
          "B) Recommend to her a good house near his office.",
          "C) Send her his housing agent’s telephone number.",
          "D) Make sure the agent finds something good for her."
        ], "C", "11.")
      ]
    },
    {
      title: "25-06-1 Section B - Conversation Two",
      questions: [
        q([
          "A) He had some plastic surgery done.",
          "B) He used to wear a sad face in school.",
          "C) He received a heart operation a few days ago.",
          "D) He was remembered for the scar on his cheek."
        ], "A", "12."),
        q([
          "A) The man’s deep sympathy for Johnny.",
          "B) The man’s use of the expression ‘fixed’.",
          "C) The man’s good memory of his childhood.",
          "D) The man’s covering up of what happened."
        ], "B", "13."),
        q([
          "A) It seemed to make up for his physical defects.",
          "B) It seemed to give him a certain uniqueness.",
          "C) It made him appear even more manly.",
          "D) It gave him a noticeable smartness."
        ], "B", "14."),
        q([
          "A) Liberal.",
          "B) Hostile.",
          "C) Critical.",
          "D) Indifferent."
        ], "C", "15.")
      ]
    }
  );

  data.vocabulary = [
    v("Unit 1", "Due to the lack of an adequate labor force, even women in this village were [compelled] to work in the coal mines.", "compelled", "由于缺乏足够的劳动力，这个村子里的妇女甚至[被迫]去煤矿工作。"),
    v("Unit 1", "People in that area are already threatened with environmental [destruction] since 60% of the forest there has been destroyed.", "destruction", "那个地区的人们已经受到环境[破坏]的威胁，因为那里60%的森林已经被毁掉了。"),
    v("Unit 1", "The auto company has seen a huge increase in the [output] of private cars this year due to the improved working efficiency.", "output", "由于工作效率的提高，这家汽车公司今年的私家车[产量]大幅增加。"),
    v("Unit 1", "Under severe attack from enemy aircraft, the troops were forced to [retreat] from the front.", "retreat", "在敌机的猛烈攻击下，部队被迫从前线[撤退]。"),
    v("Unit 1", "Survival of the Fittest is an [eternal] truth of nature.", "eternal", "适者生存是自然界[永恒]的真理。"),
    v("Unit 1", "The military government refused to [transfer] power to a democratically elected civilian government.", "transfer", "军政府拒绝将权力[移交]给民选文职政府。"),
    v("Unit 1", "Postal service personnel who are severely irresponsible purposely delay sending mail, [thereby] giving rise to great loss of public trust.", "thereby", "严重不负责任的邮政人员故意拖延寄信，[从而]导致公众信任的巨大损失。"),
    v("Unit 1", "With the increase in the number of foreign funded enterprises, various kinds of financial disputes [have emerged].", "have emerged", "随着外资企业数量的增加，各种金融纠纷也[出现了]。"),
    v("Unit 1", "The earthquake may [trigger] landslides that cause great damage and loss of life.", "trigger", "地震可能[引发]山体滑坡，造成巨大的破坏和生命损失。"),
    v("Unit 1", "Deforestation and global warming [threaten] to ruin the current and future state of our environment.", "threaten", "森林砍伐和全球变暖[有可能破坏]我们环境的现状和未来。"),
    v("Unit 1", "It was reported that almost 7 million liters [were consumed] during the 16-day beer festival in Germany that year.", "were consumed", "据报道，那年德国为期16天的啤酒节期间，[消费了]近700万升啤酒。"),
    v("Unit 2", "Studies show that if a working environment is pleasant, [productivity] increases.", "productivity", "研究表明，若工作环境舒适宜人，【工作效率】便会提升。"),
    v("Unit 2", "Private space travel is a relatively new [phenomenon]. It’s difficult at the moment to assess its effects.", "phenomenon", "私人太空旅行是一个相对较新的【现象】。目前很难评估其影响。"),
    v("Unit 2", "All of us need to build up relationships with others unless we choose to live in complete [isolation] from the outside world.", "isolation", "我们所有人都需要与他人建立关系，除非我们选择与外界完全【隔绝】。"),
    v("Unit 2", "Since sending her child to the kindergarten, she has been delighted to see a(n) [gradual] change in the boy’s character; he seems less self-centered now.", "gradual", "自从把孩子送进幼儿园，她高兴地看到男孩的性格发生了【逐渐的】变化；他现在似乎不那么以自我为中心了。"),
    v("Unit 2", "Quills were the chief writing tool from the 6th century until the [advent] of steel pens in the mid 19th century.", "advent", "从6世纪到19世纪中期钢笔【出现】之前，羽毛笔一直是主要的书写工具。"),
    v("Unit 2", "Do you think it will ever be possible to alter human [genetic] code in order to produce the “perfect” human being?", "genetic", "你认为有可能改变人类【基因】密码以制造出“完美”的人类吗？"),
    v("Unit 2", "In the end her sheer competence and professionalism won [universal] respect within and out of the government.", "universal", "最终，她纯粹的能力和专业精神赢得了政府内外的【普遍】尊重。"),
    v("Unit 2", "His political views are rather [extreme]; I hate to discuss anything with him.", "extreme", "他的政治观点相当【极端】；我讨厌和他讨论任何事。"),
    v("Unit 2", "The cheap perfume you see on special offer in petrol stations often smells [nasty] after a couple of hours.", "nasty", "你在加油站特价看到的廉价香水，几小时后通常闻起来很【难闻】。"),
    v("Unit 2", "The consumer [boom] of the 1980s led to an explosion of shopping centre development in big cities around the country.", "boom", "20世纪80年代的消费【繁荣】导致了全国各大城市购物中心开发的激增。"),
    v("Unit 2", "You shouldn’t use “Yours faithfully”—it’s too [formal] for this kind of personal letter.", "formal", "你不应该使用“Yours faithfully”——对于这种私人信件来说太【正式】了。"),
    v("Unit 2", "According to a(n) [survey] among 1000 residents, garbage collection service in the city is far from satisfactory.", "survey", "根据对1000名居民的【调查】，该市的垃圾收集服务远不能令人满意。"),
    v("Unit 2", "The cost of food and clothing has come down in recent years. [Similarly], fuel prices have fallen quite considerably.", "Similarly", "近年来食品和服装的成本下降了。【同样地】，燃料价格也大幅下跌。"),
    v("Unit 2", "In my childhood memories, we were living a(n) [rough] but happy life, with no luxuries to speak of.", "rough", "在我的童年记忆里，我们过着【艰苦】却幸福的生活，谈不上任何奢华享受。")
  ];
}

const algorithmData = {
  algChoice: [
    ref("1．下列说法错误的是（     ）。\nA．算法是程序在计算机上的具体实现。\nB．算法是用计算机编程语言翻译的结果。\nC．算法能直接在计算机上执行。\nD．程序能直接在计算机上执行。", "参考答案：A、B、C 均不严谨。若按单选题处理，优先选 C。算法是解决问题的步骤描述，不能直接在计算机上执行；程序才是可执行实现。"),
    ref("2．用贪心法解决背包问题时所用的贪心策略是（       ）。\nA．重量小的物品优先装入背包\nB．价值大的物品优先装入背包\nC．单位重量的价值大的物品优先装入背包\nD．单位重量的价值小的物品优先装入背包", "答案：C。部分背包问题常按单位重量价值从大到小选择。"),
    ref("3．找零钱问题中，面值为 1 元、5 元、10 元的硬币，要找出最少数量的硬币凑成指定金额，贪心策略应该选择（   ）。\nA．面值尽可能最小的硬币\nB．剩余数量最少的硬币\nC．面值尽可能最大的硬币\nD．剩余数量最多的硬币", "答案：C。每次选择不超过剩余金额的最大面值硬币。"),
    ref("4．回溯法求解 n 个顶点的图的 m 着色问题时，最坏情况下时间复杂度是（     ）。\nA．O(nm^n)    B．O(n^2)    C．O(n2^n)    D．O(2^n)", "答案：A。最坏要枚举 m^n 种着色方案，每个结点检查约 O(n)。"),
    ref("5．有序序列 T[]={1,4,6,8,10,12}，用二分搜索查找 x=9，比较（    ）次得出结论。\nA．5   B．3   C．4   D．2", "答案：B。依次与 6、10、8 比较，共 3 次。"),
    ref("6．算法五种特性分别是输入、输出、（    ）、有限性、可行性。\nA．鲁棒性    B．二义性    C．确定性    D．兼容性", "答案：C。"),
    ref("7．贪心算法框架中，从候选集合中选出当前看来最好元素的函数是（ ）。\nA．可行函数    B．解决函数    C．选择函数    D．目标函数", "答案：C。"),
    ref("8．0-1 背包：n=6，W=10，v=(15,59,21,30,60,5)，w=(1,5,2,3,6,1)。最大价值为（    ）。\nA．101    B．110    C．115    D．120", "答案：B。选择第 2、3、4 个物品，重量 5+2+3=10，价值 59+21+30=110。"),
    ref("9．使用子集树解决 0-1 背包问题时算法时间复杂度为（   ）。\nA．O(m2^m)    B．O(n2^n)    C．O(2^mn)    D．O(2^nm)", "答案：B。子集树规模为 2^n，通常还要做结点处理。"),
    ref("10．n 皇后问题中引入随机化算法的方法中正确的是（    ）。\nA．随机选取棋盘上的一个位置，只要和其它皇后不冲突即可\nB．随机选择不同斜线的位置\nC．随机选择不同列的位置\nD．随机选择不同行的位置", "参考答案：D"),
    ref("11．TSP 回溯中，若当前路径累积距离已超过已知最优解，算法会？\nA．继续计算完整路径    B．剪枝，放弃该路径并回溯\nC．随机选择另一条路径    D．重置所有城市访问状态", "答案：B。"),
    ref("12．回溯法中，可行解是指（     ）。\nA．满足问题约束条件的解    B．所有可能的解\nC．目标函数值最大的解    D．仅包含部分变量的解", "答案：A。"),
    ref("13．T(n)=2T(n/2)+1，T(1)=1，则 T(n)=（     ）。\nA．nlogn    B．logn    C．n^2    D．nlgn", "参考答案：T(n)=2n-1，渐进复杂度为 Θ(n)。原选项中没有标准正确项。"),
    ref("14．特殊棋盘覆盖采用分治算法，以下描述不正确的是（       ）。\nA．首次分解为 2 个 2^3*2^3 子棋盘\nB．采用边分边治的方法不断构造与原问题相同的子问题\nC．首次分解为 4 个 2^3*2^3 子棋盘\nD．核心思想是递归算法", "答案：A。棋盘覆盖通常每次分成 4 个子棋盘。"),
    ref("15．无向图 G=(V,E)，|V|=n，图的 m 可着色判定问题时间复杂度为（     ）。\nA．O(mn^m)    B．O(nm^n)    C．O(2^mn)    D．O(2^nm)", "答案：B。"),
    ref("16．两个序列长度分别为 m、n，求最长公共子序列耗时（      ）。\nA．O(m^2)    B．O(n^2)    C．O(mn)    D．O(mn)", "答案：C 或 D，原题选项重复；标准答案为 O(mn)。"),
    ref("17．影响算法时间复杂度的主要因素除算法本身外，正确的是（多选）。\nA．一定与输入序列有关\nB．一定不与输入序列有关\nC．不一定与输入序列有关\nD．一般与问题规模有关", "答案：C、D。"),
    ref("18．T(n)=30n^4+20n^3+40n^2+46n+100，可用哪些渐进符号表示？（多选）\nA．O    B．Ω    C．Θ    D．以上都不能", "答案：A、B、C。它可表示为 O(n^4)、Ω(n^4)、Θ(n^4)。"),
    ref("19．关于伪代码，正确的是（    ）。\nA．不能使用数学符号\nB．不能被人类理解，只能被计算机执行\nC．必须严格遵循某种编程语言语法\nD．使用自然语言和类编程语言结构，便于描述算法逻辑", "答案：D。"),
    ref("20．关于 Kruskal 算法，正确的是（多选）。\nA．时间复杂度为 O(e log e)\nB．对稠密图比 Prim 有效\nC．对稀疏图比 Prim 有效\nD．任何无向连通图都比 Prim 有效", "答案：A、C。"),
    ref("21．分治法将大问题分解为多个子问题，子问题必须满足（多选）。\nA．一般不相互独立    B．相互独立    C．规模变小    D．与原问题相同", "答案：B、C、D。"),
    ref("22．二分查找时间复杂度为（     ）。\nA．O(nlogn)    B．O(n)    C．O(logn)    D．以上都不对", "答案：C。"),
    ref("23．X={A,B,C,B,D,A,B}，Y={A,C,B,E,D,B}，LCS 长度为（        ）。\nA．3    B．6    C．5    D．4", "答案：C。"),
    ref("24．部分背包与 0-1 背包的区别是（      ）。\nA．部分背包必须装满背包\nB．部分背包可以取物品一部分\nC．0-1 背包允许物品分割\nD．部分背包时间复杂度更高", "答案：B。"),
    ref("25．关于算法时间复杂度主要影响因素，不正确的是（多选）。\nA．一定与输入序列有关\nB．一定不与输入序列有关\nC．不一定与输入序列有关\nD．一般与问题规模有关", "答案：A、B。"),
    ref("26．回溯法通常采用哪种搜索策略？\nA．广度优先    B．深度优先    C．动态规划    D．贪心", "答案：B。"),
    ref("27．算法分析是（   ）。\nA．将算法用语言表示出来\nB．执行程序确定错误结果\nC．对算法需要多少计算时间和存储空间作定量分析\nD．证明算法正确性", "答案：C。"),
    ref("28．A[1..60]={11,12,...,70}，二分搜索 x=7、33、70、77 的比较次数分别为 a、b、c、d，则（   ）。\nA．a<b<c<d    B．a>b=c=d    C．a<b=c=d    D．a<c<b=d", "参考答案：此题依赖 mid 取整方式和比较计数口径。若按常见教材口径，通常选 B；建议以课堂二分模板为准。"),
    ref("29．M1(5×10), M2(10×4), M3(4×6)，矩阵链乘最少乘法次数为（   ）。\nA．540    B．320    C．720    D．300", "答案：B。先算 M1M2：200，再乘 M3：120，总计 320。"),
    ref("30．用贪心法设计算法的关键是（      ）。\nA．分解子问题    B．选好贪心策略    C．获取递推关系式    D．满足最优性原理", "答案：B。"),
    ref("31．下列（     ）不是描述算法的工具。\nA．数据流图    B．伪代码    C．自然语言    D．程序语言", "答案：A。"),
    ref("32．若算法执行时间不超过输入规模的两倍，渐进时间复杂度为（     ）。\nA．O(n^2)    B．O(n)    C．    D．", "答案：B。"),
    ref("33．动态规划“以空间换时间”的核心原因是（ ）。\nA．必须使用贪心策略\nB．子问题固定大小\nC．记录子问题的解以避免重复计算\nD．存储所有可能解", "答案：C。"),
    ref("34．for(int i=0;i<n;i++) for(int j=0;j<i;j++) S; S 执行次数为（     ）。\nA．n^2    B．n^2/2    C．n(n+1)/2    D．n(n-1)/2", "答案：D。"),
    ref("35．3 位密码包含 2、3、5，采用排列树构建解空间，可能解个数是？\nA．6    B．3    C．27    D．9", "答案：A，3! = 6。"),
    ref("36．使用 F(n)=n*F(n) 递归求 F(4)，边界 F(0)=1，递归调用子函数次数为（     ）。\nA．3次    B．4次    C．5次    D．8次", "参考答案：若不计初始 F(4)，递归调用 4 次；若计入初始调用，共 5 次。题干写“调用子函数”通常选 B。"),
    ref("37．Fibonacci 第 1 项为 0，第 2 项为 1，第 10 项为（     ）。\nA．3    B．13    C．21    D．34", "答案：D。"),
    ref("38．下列排序算法不是基于交换的是（     ）。\nA．冒泡排序    B．快速排序    C．合并排序    D．堆排序", "答案：C。"),
    ref("39．“对于给定输入数组，交换两个数的位置”违反算法的（     ）特性。\nA．有穷性    B．确定性    C．可行性    D．复杂性", "答案：B。没有说明交换哪两个数，步骤不确定。"),
    ref("40．背包容量 100，物品 10 个，动态规划解 0-1 背包数组大小为（     ）。\nA．10    B．100    C．1000    D．10000", "答案：C。教材常按 n*V 估算，即 10*100=1000。严格实现也可能是 (n+1)(V+1)。"),
    ref("41．5 个矩阵连乘可能的计算次序有（     ）种。\nA．4    B．5    C．14    D．15", "答案：C。Catalan(4)=14。"),
    ref("42．折半查找算法在最坏情况下复杂度为（      ）。\nA．O(n)    B．O(n^2)    C．O(nlogn)    D．O(logn)", "答案：D。"),
    ref("43．X 长 20，Y 长 30，动态规划解 LCS，记录子问题最优值的数组大小为（      ）。\nA．651    B．600    C．620    D．630", "答案：A。通常建 (m+1)(n+1)=21*31=651。"),
    ref("44．关于回溯法中“剪枝”，正确的是（   ）。\nA．剪枝函数越复杂效率越高\nB．剪枝只能用于最优解\nC．剪枝减少搜索节点，不改变解空间结构，也不影响最终结果\nD．剪枝会改变解空间，可能导致找不到最优解", "答案：C。"),
    ref("45．哪个算法不是分治算法典型应用？\nA．二分查找    B．0-1 背包    C．循环赛日程表    D．快速排序", "答案：B。"),
    ref("46．算法“有穷性”描述正确的是（   ）。\nA．有限时间完成但步骤可无限\nB．代码行数必须有限\nC．可包含死循环只要最终输出\nD．必须执行有限个步骤后终止，且每步有限时间完成", "答案：D。"),
    ref("47．伪代码中常用符号“=”表示（   ）。\nA．等于\nB．小于等于\nC．赋值\nD．交换", "答案：C。"),
    ref("48．哪个问题适合动态规划？哪个适合分治？哪个适合贪心？哪个适合回溯？\nA．N皇后    B．棋盘覆盖    C．部分背包    D．矩阵链乘法", "答案：动态规划 D；分治 B；贪心 C；回溯 A。")
  ],
  algBlank: [
    ref("1．算法复杂性最重要的计算机资源是 ______ 和 ______。", "答案：时间、空间。"),
    ref("2．二分搜索最坏情况下时间复杂度是 ______。", "答案：O(log n)。"),
    ref("3．回溯法解空间中解的形式是 ______；组织形式通常有 ______、______、______。", "答案：n 元组；子集树、排列树、满 m 叉树/状态空间树。"),
    ref("4．回溯方法搜索方式是 ______，剪枝函数和限界函数作用分别是 ______。", "答案：深度优先；剪去不可能产生可行解或最优解的分支，利用界限排除不可能优于当前最优解的分支。"),
    ref("5．A[1:10] 矩阵连乘 DP 存储各子问题最优值的二维数组共有 ______ 个存储单元。", "答案：100 个；若只计有效上三角子问题，为 55 个。"),
    ref("6．算法满足输入、输出、______、______ 性和能行性。", "答案：确定性、有限性。"),
    ref("7．二分搜索分治策略中的分解操作是 ______。", "答案：取中间位置 mid，将查找区间分成 low..mid-1 和 mid+1..high 两个子区间。"),
    ref("8．矩阵连乘 DP 计算各子问题最优值复杂度是 ______。", "答案：O(n^3)。"),
    ref("9．贪心法两个基本要素是 ______ 和 ______。", "答案：贪心选择性质、最优子结构。"),
    ref("10．分治法三个步骤：______、______、______，核心思想是 ______。", "答案：分解、求解、合并；将大问题分解为相同类型的小问题递归求解。"),
    ref("11．分支限界法以 ______ 或 ______ 的方式搜索解空间树。", "答案：广度优先、最小耗费/最大效益优先。"),
    ref("12．分治法子问题之间 ______ 且与原问题相同，用 ______ 方法求解子问题。", "答案：相互独立；递归。"),
    ref("13．最大团问题解空间树是 ______ 树，TSP 解空间树是 ______ 树。", "答案：子集树；排列树。"),
    ref("14．回溯法以 ______ 搜索；分支限界法以 ______ 搜索。", "答案：深度优先；广度优先或优先队列式。"),
    ref("15．A=\"xzyzzyx\"，B=\"zxyyzxz\" 的一个 LCS 为 ______，长度是 ______。", "参考答案：zyzx，长度 4。也可能存在其他长度为 4 的 LCS。"),
    ref("16．MergeSort 空缺。", "答案：middle=(low+high)/2；MergeSort(A,middle+1,high)。"),
    ref("17．m 着色 Backtrack 空缺。", "答案：x[t]=i；Backtrack(t+1)。"),
    ref("18．动态规划步骤：最优子结构性质分析、______、计算最优值并记录信息，根据 ______。", "答案：建立递归关系/状态转移方程；记录的信息构造最优解。"),
    ref("19．TSP 解空间树是 ______，回溯法时间复杂度为 ______。", "答案：排列树；O(n!)。"),
    ref("20．0-1 背包状态转移方程。", "答案：m[i][j]=m[i-1][j]（j<wi）；m[i][j]=max(m[i-1][j], m[i-1][j-wi]+vi)（j>=wi）。题中 pi/vi 命名若价值为 pi、重量为 vi，则相应替换。"),
    ref("21．渐近紧确界符号是（    ）。", "答案：Θ。"),
    ref("22．Fibonacci 动态规划状态转移公式。", "答案：F(0)=0，F(1)=1，F(n)=F(n-1)+F(n-2)。若教材从第 1 项开始，则按 F1=0，F2=1 调整。"),
    ref("23．动态规划基本要素有 ______、______、自底向上的求解方法。", "答案：最优子结构、重叠子问题。"),
    ref("24．图 m 可着色解空间树是 ______，时间复杂度为 ______。", "答案：满 m 叉树；O(nm^n)。"),
    ref("25．T(n)=2T(n/2)+1，T(1)=1，则 T(n)= ______。", "答案：2n-1，Θ(n)。")
  ],
  algShort: [
    ref("1．简述算法的概念及特征，算法伪代码的具体符号表示含义。", "参考：算法是解决特定问题的一组有穷、确定、可执行的步骤。特征包括输入、输出、确定性、有限性、可行性。伪代码用赋值、条件、循环、过程调用、数组下标等类程序结构表达算法逻辑，不拘泥于具体语言语法。"),
    ref("2．什么是算法复杂性？如何衡量？", "参考：算法复杂性指算法运行所需资源，主要衡量时间复杂度和空间复杂度。通常按输入规模 n 的增长趋势，用 O、Ω、Θ 等渐进符号表示。"),
    ref("3．简述分治法的特征、思想和适用条件。", "参考：分治法把原问题分解为规模较小、结构相同、相互独立的子问题，递归求解后合并结果。适用条件：问题可分解，子问题与原问题同型，子问题相互独立，子问题解可合并。"),
    ref("4．原文该题仅保留题号，未提供具体题干。", "参考：原题缺失，建议回看教师资料或课堂重点补题。"),
    ref("5．简述贪心算法基本思想、步骤和基本要素。", "参考：每一步选择当前看来最优的局部选择，希望导出全局最优。步骤：建立候选集合，按贪心策略选择元素，判断可行并加入解集合，直到构成完整解。基本要素：贪心选择性质、最优子结构。"),
    ref("6．简述动态规划步骤。为什么说以空间换时间？", "参考：分析最优子结构，定义状态，建立状态转移方程，确定边界，自底向上计算并记录信息，构造最优解。它保存子问题结果，避免重复计算，因此用额外存储换取时间效率。"),
    ref("7．简述动态规划基本要素。", "参考：最优子结构、重叠子问题、状态定义、状态转移方程、边界条件，以及自底向上的表格计算。"),
    ref("8．简述动态规划与分治算法异同。", "参考：相同点是都把原问题分解为子问题。不同点是分治的子问题通常相互独立，递归求解后合并；动态规划的子问题往往重叠，需要保存子问题结果，通常自底向上求解。"),
    ref("9．简述回溯算法思想、可行解、可能解和最优解。", "参考：回溯按深度优先搜索解空间树，逐步构造解，遇到不满足约束或不可能更优的分支就剪枝。可能解是解空间中的候选组合；可行解满足约束；最优解是在可行解中目标函数最优的解。")
  ],
  algDesign: [
    ref("1．活动安排问题：算法贪心策略，伪代码。", "参考：按活动结束时间从早到晚排序，每次选择与已选活动相容且结束最早的活动。伪代码：sort by finish time；S={a1}；last=1；for i=2..n if s[i]>=f[last] then add ai, last=i。", ["public/imgs/4-1.png"]),
    ref("2．棋盘覆盖：2^3×2^3 特殊棋盘需要多少个 L 型骨牌，并填写覆盖情况。", "参考：除特殊方格外共有 8*8-1=63 个格子，每个 L 型骨牌覆盖 3 格，需要 21 个。方法是递归分成四个 4×4 子棋盘，在中心放一个 L 型骨牌制造三个“特殊方格”，继续递归覆盖。"),
    ref("3．选第 K 小元素：问题分析，伪代码。", "参考：可用快速选择。选择枢轴 partition，设左区元素个数为 r。若 k=r，返回枢轴；若 k<r，在左区递归；否则在右区找第 k-r 小。平均 O(n)，最坏 O(n^2)；若用中位数的中位数选枢轴可保证 O(n)。", ["public/imgs/4-3.png"]),
    ref("4．最长公共子序列：问题分析、状态转移方程、备忘录填充。", "参考：令 c[i][j] 为 X[1..i] 与 Y[1..j] 的 LCS 长度。若 i=0 或 j=0，c[i][j]=0；若 xi=yj，c[i][j]=c[i-1][j-1]+1；否则 c[i][j]=max(c[i-1][j],c[i][j-1])。", ["public/imgs/4-4.png"]),
    ref("5．循环赛日程表：n=2^3 个选手的比赛日程表。", "参考：用分治构造。先构造 n/2 个选手的日程，再复制到右下与左下区域并加偏移，使每名选手每天遇到不同对手。8 个选手需 7 天。", ["public/imgs/4-5.png"]),
    ref("6．动态规划求解 0-1 背包：备忘录填空，伪代码书写。", "参考：定义 m[i][j] 为前 i 个物品、容量 j 的最大价值。m[i][j]=m[i-1][j]（装不下）；否则 max(m[i-1][j], m[i-1][j-wi]+vi)。双重循环 i=1..n, j=0..W 填表。"),
    ref("7．贪心算法解题步骤伪代码中各函数说明。", "参考：A 是候选集合；S 是逐步扩展的解集合；solution(S) 判断 S 是否构成完整解；select(A) 按贪心策略选当前最优候选；feasible(S,x) 判断加入 x 后是否仍满足约束。"),
    ref("8．用回溯法解 4 皇后问题。", "参考：搜索范围为每一行选择一个列位置；解空间可用 4 层排列树/状态空间树表示；剪枝条件：同列冲突或同斜线冲突，即 x[i]=x[j] 或 |i-j|=|x[i]-x[j]|。继续深度优先搜索直到放置 4 个皇后。"),
    ref("9．用回溯算法解决旅游路线问题。", "参考：将路线表示为城市排列，根结点为起点，之后每层选择一个未访问城市。约束是城市不重复；若要求最短路线，可用当前路径长度加下界与已知最优解比较进行剪枝。"),
    ref("10．回溯算法中解的定义和组织结构。", "参考：解通常表示为 n 元组 x=(x1,...,xn)。组织结构包括子集树、排列树、满 m 叉树。旅游路线通常是排列树；密码箱若数字不重复是排列树，若每位可重复则是满 m 叉树。"),
    ref("11．X=\"ABCDGHBB\"，Y=\"AEDFHRAB\"，求 LCS 状态转移方程和长度。", "参考：状态转移同 LCS 标准方程。该例一个 LCS 为 ADB 或 AHB，长度为 3。"),
    ref("12．A、B、C、D 四个家，小华从 B 出发游玩其他三个家且每个只去一次，问方案数并画解空间树。", "参考：剩余 A、C、D 三个地点全排列，方案数 3! = 6。解空间树根为 B，第一层分 A/C/D，第二层从剩余两个中选，第三层为最后一个地点。")
  ]
};

let state = {
  subject: "english",
  page: "vocabulary",
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

function ref(text, answer, images = []) {
  return { text, answer, images };
}

function init() {
  state.vocabOptions = buildVocabOptions();
  renderSubjectNav();
  renderTypeNav();
  render();
}

function renderSubjectNav() {
  const nav = document.querySelector("#nav");
  nav.innerHTML = subjects.map(subject => `<button class="${subject.id === state.subject ? "active" : ""}" data-subject="${subject.id}">${subject.label}</button>`).join("");
  nav.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      state.subject = button.dataset.subject;
      state.page = currentSubject().pages[0].id;
      renderSubjectNav();
      renderTypeNav();
      render();
    });
  });
}

function renderTypeNav() {
  const nav = document.querySelector("#type-nav");
  const pages = currentSubject().pages;
  const note = document.querySelector("#ai-reference-note");
  note.hidden = !["algorithm", "software"].includes(state.subject);
  nav.innerHTML = pages.map(page => `<button class="${page.id === state.page ? "active" : ""}" data-page="${page.id}">
    ${page.label}<small>${getPageCount(page.id)} 项</small>
  </button>`).join("");
  nav.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      state.page = button.dataset.page;
      renderTypeNav();
      render();
    });
  });
}

function render() {
  const subject = currentSubject();
  const page = subject.pages.find(item => item.id === state.page) || subject.pages[0];
  document.querySelector("#subject-subtitle").textContent = subject.subtitle;
  document.querySelector("#subject-label").textContent = subject.label;
  document.querySelector("#page-title").textContent = page.title;
  document.querySelector("#content").innerHTML = "";
  if (state.page === "translation") renderTranslation();
  if (state.page === "listening") renderGroupedChoice("listening");
  if (state.page === "inReading") renderGroupedChoice("inReading");
  if (state.page === "outReading") renderGroupedChoice("outReading");
  if (state.page === "cloze") renderCloze();
  if (state.page === "vocabulary") renderVocabulary();
  if (state.page.startsWith("alg")) renderAlgorithmPage(state.page);
  if (state.page.startsWith("sw")) renderReferencePage(softwareData, state.page);
  if (state.page.startsWith("co")) renderComputerPage(state.page);
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

function renderAlgorithmPage(kind) {
  renderReferencePage(algorithmData, kind);
}

function renderReferencePage(source, kind) {
  const items = source[kind];
  document.querySelector("#page-stats").textContent = `${items.length} 题 / 含参考答案`;
  document.querySelector("#content").innerHTML = `
    <article class="reference-panel">
      <div class="section-body">
        ${items.map((item, index) => renderReferenceQuestion(kind, index, item)).join("")}
      </div>
    </article>
  `;
  document.querySelectorAll("[data-show-ref]").forEach(button => {
    button.addEventListener("click", () => {
      state.checked[button.dataset.showRef] = true;
      renderReferencePage(source, kind);
    });
  });
  document.querySelectorAll("[data-hide-ref]").forEach(button => {
    button.addEventListener("click", () => {
      state.checked[button.dataset.hideRef] = false;
      renderReferencePage(source, kind);
    });
  });
}

function renderReferenceQuestion(kind, index, item) {
  const id = `${kind}-${index}`;
  const visible = state.checked[id];
  const images = item.images || [];
  const answerImages = item.answerImages || [];
  return `
    <div class="question" id="card-${id}">
      <p class="question-title">${escapeHtml(item.text).replace(/\n/g, "<br>")}</p>
      ${images.map(src => `<figure class="question-media"><img src="${src}" alt="题目配图 ${index + 1}"></figure>`).join("")}
      <div class="actions">
        ${
          visible
            ? `<button class="btn secondary" data-hide-ref="${id}">收起参考</button>`
            : `<button class="btn secondary" data-show-ref="${id}">查看参考</button>`
        }
      </div>
      ${visible ? `<div class="answer-box">${escapeHtml(item.answer).replace(/\n/g, "<br>")}</div>${answerImages.map(src => `<figure class="question-media answer-media"><img src="${src}" alt="参考图 ${index + 1}"></figure>`).join("")}` : ""}
    </div>
  `;
}

function renderComputerPage(kind) {
  const section = computerData[kind];
  if (!section) return;
  document.querySelector("#page-stats").textContent = `${section.questions.length} 题 / 可校验`;
  document.querySelector("#content").innerHTML = `
    <article class="reference-panel">
      <div class="actions chapter-actions">
        <button class="btn secondary" data-check-computer-page="${kind}">${kind === "coAll" ? "校验当前题库" : "校验本章"}</button>
      </div>
      <div class="section-body">
        ${section.questions.map((item, index) => renderComputerQuestion(kind, index, item)).join("")}
      </div>
    </article>
  `;
  bindComputerEvents(kind);
}

function renderComputerQuestion(kind, index, item) {
  const id = `${kind}-${index}`;
  const status = state.checked[id] || {};
  const sourceText = kind === "coAll" ? `${item.source} / ${item.questionType}` : item.questionType;

  if (item.type === "choice") {
    const selected = normalizeComputerChoice(state.answers[id]);
    const multiple = item.answer.length > 1;
    const checked = Boolean(status.checked);
    const ok = checked && sameChoiceAnswers(selected, item.answer);
    const result = checked ? resultHtml(ok, `正确答案：${item.answer.join("、")}`) : "";
    return `
      <div class="question" id="card-${id}">
        <p class="question-source">${escapeHtml(sourceText)}</p>
        <p class="question-title">${item.number}. ${escapeHtml(item.stem).replace(/\n/g, "<br>")}</p>
        <div class="options">
          ${item.options.map(option => `
            <label class="option">
              <input type="${multiple ? "checkbox" : "radio"}" name="${id}" value="${option.letter}" ${selected.includes(option.letter) ? "checked" : ""}>
              <span>${escapeHtml(`${option.letter}. ${option.text}`).replace(/\n/g, "<br>")}</span>
            </label>
          `).join("")}
        </div>
        <div class="actions">
          <button class="btn secondary" data-check-computer="${id}">校验本题</button>
        </div>
        ${result}
      </div>
    `;
  }

  if (item.type === "fill") {
    const values = normalizeComputerFillValues(state.answers[id], item.answerTexts.length);
    const checked = Boolean(status.checked);
    const ok = checked && item.answerTexts.every((answer, answerIndex) => matchesAcceptableAnswer(values[answerIndex], answer));
    const answerText = item.answerTexts.map((answer, answerIndex) => `${answerIndex + 1}. ${formatAcceptableAnswer(answer)}`).join("<br>");
    const result = checked ? resultHtml(ok, `参考答案：${escapeHtml(item.answerTexts.map(formatAcceptableAnswer).join("；"))}`) : "";
    return `
      <div class="question" id="card-${id}">
        <p class="question-source">${escapeHtml(sourceText)}</p>
        <p class="question-title">${item.number}. ${escapeHtml(item.stem).replace(/\n/g, "<br>")}</p>
        <div class="fill-answer-list">
          ${item.answerTexts.map((_, answerIndex) => `
            <label class="fill-answer-item">
              <span>第 ${answerIndex + 1} 空</span>
              <input
                class="answer-input"
                type="text"
                name="${id}"
                data-answer-index="${answerIndex}"
                value="${escapeAttr(values[answerIndex])}"
                placeholder="输入答案"
              >
            </label>
          `).join("")}
        </div>
        <div class="actions">
          <button class="btn secondary" data-check-computer="${id}">校验本题</button>
        </div>
        ${result}
        ${checked ? `<div class="answer-box">${answerText}</div>` : ""}
      </div>
    `;
  }

  const textValue = typeof state.answers[id] === "string" ? state.answers[id] : "";
  const expected = item.answerTexts.join("\n");
  const checked = Boolean(status.checked);
  const ok = checked && normalizeText(textValue) === normalizeText(expected);
  const result = checked ? resultHtml(ok, "参考答案见下方") : "";
  return `
    <div class="question" id="card-${id}">
      <p class="question-source">${escapeHtml(sourceText)}</p>
      <p class="question-title">${item.number}. ${escapeHtml(item.stem).replace(/\n/g, "<br>")}</p>
      <textarea
        class="answer-textarea"
        name="${id}"
        data-computer-text="true"
        placeholder="先自己作答，再点校验"
      >${escapeHtml(textValue)}</textarea>
      <div class="actions">
        <button class="btn secondary" data-check-computer="${id}">校验本题</button>
      </div>
      ${result}
      ${checked ? `<div class="answer-box">${escapeHtml(expected).replace(/\n/g, "<br>")}</div>` : ""}
    </div>
  `;
}

function bindComputerEvents(kind) {
  document.querySelectorAll("[data-check-computer]").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.checkComputer;
      const status = state.checked[id] || {};
      state.checked[id] = { ...status, checked: true };
      renderComputerPage(kind);
    });
  });

  document.querySelectorAll("[data-check-computer-page]").forEach(button => {
    button.addEventListener("click", () => {
      computerData[kind].questions.forEach((_, index) => {
        const id = `${kind}-${index}`;
        const status = state.checked[id] || {};
        state.checked[id] = { ...status, checked: true };
      });
      renderComputerPage(kind);
    });
  });

  document.querySelectorAll(".question input[type='radio'][name^='co'], .question input[type='checkbox'][name^='co']").forEach(input => {
    input.addEventListener("change", event => {
      const name = event.target.name;
      const selected = Array.from(document.querySelectorAll(`input[name='${name}']:checked`)).map(item => item.value);
      state.answers[name] = selected;
      const status = state.checked[name] || {};
      state.checked[name] = { ...status, checked: false };
    });
  });

  document.querySelectorAll(".answer-input").forEach(input => {
    input.addEventListener("input", event => {
      const name = event.target.name;
      const answerIndex = Number(event.target.dataset.answerIndex);
      const values = normalizeComputerFillValues(state.answers[name], itemCountByName(name, kind));
      values[answerIndex] = event.target.value;
      state.answers[name] = values;
      const status = state.checked[name] || {};
      state.checked[name] = { ...status, checked: false };
    });
  });

  document.querySelectorAll("[data-computer-text]").forEach(textarea => {
    textarea.addEventListener("input", event => {
      const name = event.target.name;
      state.answers[name] = event.target.value;
      const status = state.checked[name] || {};
      state.checked[name] = { ...status, checked: false };
    });
  });
}

function itemCountByName(name, kind) {
  const index = Number(name.split("-").pop());
  const item = computerData[kind].questions[index];
  return item && item.answerTexts ? item.answerTexts.length : 1;
}

function normalizeComputerChoice(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value) return [value];
  return [];
}

function normalizeComputerFillValues(value, count) {
  if (Array.isArray(value)) {
    return Array.from({ length: count }, (_, index) => value[index] || "");
  }
  return Array.from({ length: count }, () => "");
}

function splitAcceptableAnswers(answer) {
  return String(answer || "")
    .split(/[;；]/)
    .map(item => item.trim())
    .filter(Boolean);
}

function matchesAcceptableAnswer(input, answer) {
  const normalizedInput = normalizeText(input);
  return splitAcceptableAnswers(answer).some(option => normalizeText(option) === normalizedInput);
}

function formatAcceptableAnswer(answer) {
  return splitAcceptableAnswers(answer).join(" / ");
}

function sameChoiceAnswers(selected, expected) {
  if (selected.length !== expected.length) return false;
  const sortedSelected = [...selected].sort();
  const sortedExpected = [...expected].sort();
  return sortedSelected.every((value, index) => value === sortedExpected[index]);
}

function normalizeText(text) {
  return String(text || "")
    .replace(/[，]/g, ",")
    .replace(/[；]/g, ";")
    .replace(/[：]/g, ":")
    .replace(/[。．]/g, ".")
    .replace(/[“”]/g, "\"")
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, "")
    .trim()
    .toLowerCase();
}

function currentSubject() {
  return subjects.find(subject => subject.id === state.subject) || subjects[0];
}

function getPageCount(pageId) {
  if (pageId === "translation") return 1;
  if (["listening", "inReading", "outReading"].includes(pageId)) {
    return data[pageId].reduce((sum, group) => sum + group.questions.length, 0);
  }
  if (pageId === "cloze") return data.cloze.answers.length;
  if (pageId === "vocabulary") return data.vocabulary.length;
  if (algorithmData[pageId]) return algorithmData[pageId].length;
  if (typeof softwareData !== "undefined" && softwareData[pageId]) return softwareData[pageId].length;
  if (typeof computerData !== "undefined" && computerData[pageId]) return computerData[pageId].questions.length;
  return 0;
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
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeHtml(text) {
  return escapeAttr(text);
}

init();
