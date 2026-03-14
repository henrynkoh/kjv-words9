/**
 * KJV verses by topic for discussing and spreading words of truth.
 * Use depending on audience, situation, and level of intelligence/knowledge on Bible verses.
 * Format and purpose aligned with https://github.com/henrynkoh/kjv-faith-ai
 */

export interface VerseEntry {
  id: string;
  theme: string;
  korean: string;
  ref: string;
  text: string;
}

/** Suggested use: who you're speaking to */
export type Audience = "believers" | "seekers" | "new believers" | "mature" | "mixed" | "children";

/** Suggested use: context of sharing */
export type Situation = "evangelism" | "teaching" | "comfort" | "correction" | "devotion" | "worship" | "counsel";

/** Suggested level of Bible knowledge for this topic */
export type KnowledgeLevel = "any" | "beginner" | "moderate" | "deeper";

export interface TopicCategory {
  id: string;
  title: string;
  description?: string;
  /** Use these verses when speaking to these audiences */
  audienceSuggestions?: Audience[];
  /** Use in these situations when discussing or spreading the word */
  situationSuggestions?: Situation[];
  /** Fits this level of Bible knowledge */
  knowledgeLevel?: KnowledgeLevel;
  verses: VerseEntry[];
}

export const topics: TopicCategory[] = [
  {
    id: "creation-redemption",
    title: "Creation & Redemption",
    description: "Creation through Him, light vs darkness, one blood, judgment, righteousness, and the Lamb.",
    audienceSuggestions: ["seekers", "new believers", "mixed"],
    situationSuggestions: ["evangelism", "teaching"],
    knowledgeLevel: "any",
    verses: [
      {
        id: "creation-through-him",
        theme: "Creation through Him",
        korean: "이 세상 모든 것은 그가 없이는 창조된 것이 없다",
        ref: "John 1:3",
        text: "All things were made by him; and without him was not any thing made that was made.",
      },
      {
        id: "light-vs-darkness",
        theme: "Light vs. Darkness",
        korean: "그가 세상에 왔으나, 그의 피조물은 어둠을 더 사랑하여 빛 가운데 나오지 않았다",
        ref: "John 3:19",
        text: "And this is the condemnation, that light is come into the world, and men loved darkness rather than light, because their deeds were evil.",
      },
      {
        id: "one-blood",
        theme: "One Blood of All Nations",
        korean: "모든 인류를 한 피에서 지으셨다",
        ref: "Acts 17:26a",
        text: "And hath made of one blood all nations of men for to dwell on all the face of the earth...",
      },
      {
        id: "appointed-times",
        theme: "Appointed Times and Bounds",
        korean: "온 땅의 사람들을 거주의 경계와 그 때를 정하셨다",
        ref: "Acts 17:26b",
        text: "...and hath determined the times before appointed, and the bounds of their habitation;",
      },
      {
        id: "judgment",
        theme: "Judgment of All Flesh",
        korean: "모든 육체가 이 땅에서 육체가운데 행한 것으로 심판을 받게된다",
        ref: "2 Corinthians 5:10",
        text: "For we must all appear before the judgment seat of Christ; that every one may receive the things done in his body, according to that he hath done, whether it be good or bad.",
      },
      {
        id: "none-righteous",
        theme: "No One is Righteous",
        korean: "의인은 없나니 하나도 없도다",
        ref: "Romans 3:10",
        text: "As it is written, There is none righteous, no, not one:",
      },
      {
        id: "god-purity",
        theme: "God's Purity and Sin",
        korean: "하나님은 점도 흠도 없는 정결한 분이시라 죄를 차마 볼 수 없다",
        ref: "Habakkuk 1:13a",
        text: "Thou art of purer eyes than to behold evil, and canst not look on iniquity...",
      },
      {
        id: "necessity-blood",
        theme: "The Necessity of Blood",
        korean: "죄의 대속은 피흘림이 없이는 불가능하다",
        ref: "Hebrews 9:22",
        text: "And almost all things are by the law purged with blood; and without shedding of blood is no remission.",
      },
      {
        id: "redemption-lamb",
        theme: "Redemption through the Lamb",
        korean: "정결한 어린양같은 하나님 아들의 피값으로만 의롭게 될 수 있는 대속의 길이",
        ref: "1 Peter 1:18-19",
        text: "Forasmuch as ye know that ye were not redeemed with corruptible things... But with the precious blood of Christ, as of a lamb without blemish and without spot:",
      },
    ],
  },
  {
    id: "faith-belief-spirit",
    title: "Faith, Belief & Holy Spirit",
    description: "Dying in sin, miracles for belief, sending of disciples, Comforter, and the work of God.",
    audienceSuggestions: ["believers", "new believers", "seekers"],
    situationSuggestions: ["evangelism", "teaching", "devotion"],
    knowledgeLevel: "moderate",
    verses: [
      {
        id: "die-in-sins",
        theme: "Dying in Your Sins",
        korean: "예수님이 말씀하시길 내가 행한 일을 믿지 않으면 너희는 너의 죄값을 스스로 값아야 한다",
        ref: "John 8:24",
        text: "I said therefore unto you, that ye shall die in your sins: for if ye believe not that I am he, ye shall die in your sins.",
      },
      {
        id: "miracles-for-belief",
        theme: "Miracles Recorded for Belief",
        korean: "예수님이 말씀하시길 내가 이 곳이 기록되지 않은 많은 기적을 행한 것은 너희로 나를 믿고 영원한 생명을 얻도록 하기 위함이다",
        ref: "John 20:30-31",
        text: "And many other signs truly did Jesus... But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name.",
      },
      {
        id: "sending-disciples",
        theme: "The Sending of the Disciples",
        korean: "하나님아버지가 나를 보낸것 같이 나도 너희를 보내노니 성령을 받으라",
        ref: "John 20:21-22",
        text: "...as my Father hath sent me, even so send I you. And when he had said this, he breathed on them, and saith unto them, Receive ye the Holy Ghost:",
      },
      {
        id: "benefit-of-departure",
        theme: "The Benefit of Jesus' Departure",
        korean: "내가 떠나는 것이 오히려 너희에게 유익이 되는 것은 하나님아버지께서 나의 이름으로 보혜사 성령을 너희에게 보낼 것이기 때문이라",
        ref: "John 16:7",
        text: "Nevertheless I tell you the truth; It is expedient for you that I go away: for if I go not away, the Comforter will not come unto you; but if I depart, I will send him unto you.",
      },
      {
        id: "spirit-teaches",
        theme: "The Teaching Ministry of the Spirit",
        korean: "성령이 오시면 내가 너희에게 이른 말을 생각나게 하고, 모른 것은 알려주시리라",
        ref: "John 14:26",
        text: "But the Comforter, which is the Holy Ghost... he shall teach you all things, and bring all things to your remembrance, whatsoever I have said unto you.",
      },
      {
        id: "no-condemnation",
        theme: "No Condemnation in the Spirit",
        korean: "성령을 따르는 자에게는 정죄함이 없느니라",
        ref: "Romans 8:1",
        text: "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.",
      },
      {
        id: "self-examination",
        theme: "Self-Examination",
        korean: "너희는 스스로 자신을 점검하라; 성령안에 있느지 악한 영을 따르는지",
        ref: "2 Corinthians 13:5",
        text: "Examine yourselves, whether ye be in the faith; prove your own selves. Know ye not your own selves, how that Jesus Christ is in you, except ye be reprobates?",
      },
      {
        id: "work-of-god-believing",
        theme: "The Work of God: Believing",
        korean: "하나님의 뜻을 행하는 것은 하나님이 보내신 자를 믿는 것이다",
        ref: "John 6:29",
        text: "Jesus answered and said unto them, This is the work of God, that ye believe on him whom he hath sent.",
      },
      {
        id: "written-for-learning",
        theme: "Learning from Things Written Aforetime",
        korean: "이전 기록은 우리의 배움을 위한 것이다",
        ref: "Romans 15:4",
        text: "For whatsoever things were written aforetime were written for our learning, that we through patience and comfort of the scriptures might have hope.",
      },
    ],
  },
  {
    id: "tradition-law",
    title: "Tradition, Law & True Worship",
    description: "God's will vs man's tradition, lips vs heart, vain worship, law and justification.",
    audienceSuggestions: ["mature", "believers"],
    situationSuggestions: ["teaching", "correction"],
    knowledgeLevel: "moderate",
    verses: [
      {
        id: "discern-gods-will",
        theme: "Discerning God's Will vs. Man's",
        korean: "너희는 하나님뜻을 따르는지 사람의 교훈을 따르는지 분별하라",
        ref: "Colossians 2:8",
        text: "Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ.",
      },
      {
        id: "traditions-elders",
        theme: "Traditions of the Elders",
        korean: "저들은 하나님의 뜻보다 장로의 유전을 더욱 중요시 하는도다",
        ref: "Mark 7:9",
        text: "And he said unto them, Full well ye reject the commandment of God, that ye may keep your own tradition.",
      },
      {
        id: "lips-vs-heart",
        theme: "Lips vs. Heart",
        korean: "저들이 입으로는 하나님을 찬양한다고 하지만 마음은 멀도다",
        ref: "Matthew 15:8",
        text: "This people draweth nigh unto me with their mouth, and honoureth me with their lips; but their heart is far from me.",
      },
      {
        id: "vain-worship",
        theme: "Vain Worship",
        korean: "저들이 나를 헛되이 경배하는도다",
        ref: "Matthew 15:9",
        text: "But in vain they do worship me, teaching for doctrines the commandments of men.",
      },
      {
        id: "no-justification-law",
        theme: "No Justification by the Law",
        korean: "율법의 행위로는 하나님앞에 의롭게 될 자가 없도다",
        ref: "Galatians 2:16",
        text: "Knowing that a man is not justified by the works of the law, but by the faith of Jesus Christ... for by the works of the law shall no flesh be justified.",
      },
      {
        id: "purpose-of-law",
        theme: "The Purpose of the Law",
        korean: "율법을 주신 목적은 죄를 알게 하시기 위함이었다",
        ref: "Romans 3:20",
        text: "Therefore by the deeds of the law there shall no flesh be justified in his sight: for by the law is the knowledge of sin.",
      },
      {
        id: "days-months-times",
        theme: "Observance of Days and Times",
        korean: "저들이 날과 달과 절기를 지키며 하나님을 경배한다고 하는 것은 헛되다",
        ref: "Galatians 4:10-11",
        text: "Ye observe days, and months, and times, and years. I am afraid of you, lest I have bestowed upon you labour in vain.",
      },
      {
        id: "works-for-men",
        theme: "Doing Deeds to be Seen by Men",
        korean: "저들의 행함은 사람들에 보이기 위함이요 하나님께 하는 것이 아니니라",
        ref: "Matthew 23:5a",
        text: "But all their works they do for to be seen of men...",
      },
    ],
  },
  {
    id: "religious-leaders",
    title: "Religious Leaders & Hypocrisy",
    description: "Whited sepulchres, shutting the kingdom, plots, and the purpose of miracles.",
    audienceSuggestions: ["mature", "believers"],
    situationSuggestions: ["teaching", "counsel"],
    knowledgeLevel: "deeper",
    verses: [
      {
        id: "whited-sepulchres",
        theme: "Whited Sepulchres",
        korean: "예수님께서 사도게인, 바리세인, 종교지도자들에게 말씀하시길 너희는 회칠한 무덤이다",
        ref: "Matthew 23:27",
        text: "Woe unto you, scribes and Pharisees, hypocrites! for ye are like unto whited sepulchres, which indeed appear beautiful outward, but are within full of dead men's bones, and of all uncleanness.",
      },
      {
        id: "shutting-kingdom",
        theme: "Shutting the Kingdom",
        korean: "너희는 하나님나라에 들어가려고도 않으며 들어가려는 사람들도 문앞에서 막고있다",
        ref: "Matthew 23:13",
        text: "But woe unto you, scribes and Pharisees, hypocrites! for ye shut up the kingdom of heaven against men: for ye neither go in yourselves, neither suffer ye them that are entering to go in.",
      },
      {
        id: "plot-lazarus",
        theme: "Plot to Kill Lazarus",
        korean: "예수께서 죽은 나사로를 살리시고 많은 무리가 따르니 제사장들이 나사로도 죽이려 하니라",
        ref: "John 12:10",
        text: "But the chief priests consulted that they might put Lazarus also to death;",
      },
      {
        id: "miracle-cana",
        theme: "Miracle at Cana",
        korean: "예수님께서 가나에서 혼인잔치집 물을 포도주로 변하게하는 기적을 행하셨다",
        ref: "John 2:7-9",
        text: "Jesus saith unto them, Fill the waterpots with water... When the ruler of the feast had tasted the water that was made wine...",
      },
      {
        id: "purpose-miracles",
        theme: "Purpose of Miracles",
        korean: "예수님께서 많은 기적을 행하심은 저들로 예수님을 약속된 메시아로 믿도록 하려는 것이었다",
        ref: "John 20:31",
        text: "But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name.",
      },
      {
        id: "seeking-loaves",
        theme: "Seeking for Loaves",
        korean: "많은 무리가 예수님을 따른 것은 먹고 베불렀기 때문이요, 기적을 본 까닭이 아니었다고 지적하셨다",
        ref: "John 6:26",
        text: "Jesus answered them and said, Verily, verily, I say unto you, Ye seek me, not because ye saw the miracles, but because ye did eat of the loaves, and were filled.",
      },
      {
        id: "sodom-comparison",
        theme: "Comparison to Sodom",
        korean: "여기서 행한 기적들 소돔과 고무라에서 행하였더라면 저들도 회개하였으니라",
        ref: "Matthew 11:23b",
        text: "...for if the mighty works, which have been done in thee, had been done in Sodom, it would have remained until this day.",
      },
      {
        id: "not-see-until",
        theme: "Not See Me Until...",
        korean: "예수님께서 말씀하시길 주여하며 다시 환영할때까지는 나를 다시 보지못하리 하셨다",
        ref: "Matthew 23:39",
        text: "For I say unto you, Ye shall not see me henceforth, till ye shall say, Blessed is he that cometh in the name of the Lord.",
      },
    ],
  },
  {
    id: "israel-gentiles",
    title: "Israel, Gentiles & Gospel",
    description: "Turning to the Gentiles, Jerusalem Council, apostles to circumcision vs uncircumcision, and God's wisdom.",
    audienceSuggestions: ["mature", "believers"],
    situationSuggestions: ["teaching"],
    knowledgeLevel: "deeper",
    verses: [
      {
        id: "turning-gentiles",
        theme: "Turning to the Gentiles",
        korean: "바올이 선포하길 이 하나님복음이 너희에게 먼저 선포되어야 했으나 너희가 거절하므로 이제는 이방인에게 선포하러 가는도다",
        ref: "Acts 13:46",
        text: "Then Paul and Barnabas waxed bold, and said, It was necessary that the word of God should first have been spoken to you: but seeing ye put it from you... lo, we turn to the Gentiles.",
      },
      {
        id: "circumcision-dispute",
        theme: "The Circumcision Dispute",
        korean: "예루살렘에서 내려온 무리가 모세의 율법을 지키지 않으면 구원받지 못한다 주장하여 혼돈케 하였다",
        ref: "Acts 15:1",
        text: "And certain men which came down from Judaea taught the brethren, and said, Except ye be circumcised after the manner of Moses, ye cannot be saved.",
      },
      {
        id: "jerusalem-council",
        theme: "The Jerusalem Council",
        korean: "예루살렘 공회에서 베드로가 전한 복음과 바올이 전한 복음에 대한 회의가 열리게 되었다",
        ref: "Acts 15:6",
        text: "And the apostles and elders came together for to consider of this matter.",
      },
      {
        id: "apostles-circumcision",
        theme: "Apostles to Circumcision vs. Uncircumcision",
        korean: "베드로는 할례자의 사도로 바올은 이방인의 사도로 구분되어 복음을 전하게 되었다",
        ref: "Galatians 2:7",
        text: "But contrariwise, when they saw that the gospel of the uncircumcision was committed unto me, as the gospel of the circumcision was unto Peter;",
      },
      {
        id: "kingdom-vs-grace",
        theme: "Gospel of the Kingdom vs. Grace",
        korean: "베드로에게는 이스라엘 약속된 왕국복음과 바울에게는 은혜복음이 맡겨졌다",
        ref: "Galatians 2:9",
        text: "...they gave to me and Barnabas the right hands of fellowship; that we should go unto the heathen, and they unto the circumcision.",
      },
      {
        id: "three-groups",
        theme: "Three Groups of Humanity",
        korean: "모든 인류는 이스라엘과 이방인과 교회로 구분하셨다",
        ref: "1 Corinthians 10:32",
        text: "Give none offence, neither to the Jews, nor to the Gentiles, nor to the church of God:",
      },
      {
        id: "paul-sorrow-israel",
        theme: "Paul's Sorrow for Israel",
        korean: "내 동족 이스라엘이 하나님의 구원을 받기원하노니 내가 끊어질지라도 간절히 원하다",
        ref: "Romans 9:3",
        text: "For I could wish that myself were accursed from Christ for my brethren, my kinsmen according to the flesh:",
      },
      {
        id: "salvation-gentiles-fall",
        theme: "Salvation to Gentiles through Israel's Fall",
        korean: "이스라엘의 실족함으로 이방인의 구원이 이르게 되었다",
        ref: "Romans 11:11",
        text: "...but rather through their fall salvation is come unto the Gentiles, for to provoke them to jealousy.",
      },
      {
        id: "depth-wisdom",
        theme: "Depth of God's Wisdom",
        korean: "하나님 구원계획의 놀라움을 사람으로는 알 수가 없도다",
        ref: "Romans 11:33",
        text: "O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out!",
      },
    ],
  },
  {
    id: "study-living",
    title: "Study & Christian Living",
    description: "Rightly dividing the word, Bereans, persecution, following Christ, and spiritual maturity.",
    audienceSuggestions: ["believers", "new believers", "mature"],
    situationSuggestions: ["teaching", "devotion", "counsel"],
    knowledgeLevel: "any",
    verses: [
      {
        id: "second-coming-time",
        theme: "The Time of the Second Coming",
        korean: "세상 마지막때와 주님이 다시 오시는 떄는 나도 모르고, 천사도 모르며 오직 하나님아버지 권한에 있도다",
        ref: "Matthew 24:36",
        text: "But of that day and hour knoweth no man, no, not the angels of heaven, but my Father only.",
      },
      {
        id: "gospel-paul-preached",
        theme: "The Gospel Paul Preached",
        korean: "너희가 나 바올이 전한 복음을 헛되이 믿지 않았다면 그것으로 구원받았다",
        ref: "1 Corinthians 15:1-2",
        text: "...I declare unto you the gospel which I preached unto you... by which also ye are saved, if ye keep in memory what I preached unto you, unless ye have believed in vain.",
      },
      {
        id: "rightly-dividing",
        theme: "Rightly Dividing the Word",
        korean: "너희는 하나님앞에서 부끄러움 당하지 않도록 하나님말씀을 바르게 나누어 공부하라",
        ref: "2 Timothy 2:15",
        text: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
      },
      {
        id: "glory-in-knowing",
        theme: "Glorying in the Lord",
        korean: "너는 자랑하려거든 하나님말씀 아는 것으로 자랑하라",
        ref: "Jeremiah 9:24",
        text: "But let him that glorieth glory in this, that he understandeth and knoweth me...",
      },
      {
        id: "noble-bereans",
        theme: "Noble Bereans",
        korean: "베레아 사람들은 듣는 말씀이 성경에 응하는 지 날마다 부지런히 비교하여 데살로니가 사람들보다 고귀하다는 선포를 들었다",
        ref: "Acts 17:11",
        text: "These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.",
      },
      {
        id: "traditions-of-men",
        theme: "Traditions of Men",
        korean: "저들은 하나님의 말씀을 사람들의 교훈으로 바꾸어 가르친다",
        ref: "Matthew 15:9",
        text: "But in vain they do worship me, teaching for doctrines the commandments of men.",
      },
      {
        id: "god-their-belly",
        theme: "God is Their Belly",
        korean: "저들의 신은 하나님이 아니요 저들읠 배로다",
        ref: "Philippians 3:19",
        text: "Whose end is destruction, whose God is their belly, and whose glory is in their shame, who mind earthly things.",
      },
      {
        id: "jesus-synagogue",
        theme: "Jesus in the Synagogue",
        korean: "예수님은 회당에서 이사야서를 읽으시며 가르치셨다",
        ref: "Luke 4:16-17",
        text: "...and stood up for to read. And there was delivered unto him the book of the prophet Esaias.",
      },
      {
        id: "paul-hired-house",
        theme: "Paul's Hired House",
        korean: "사도바올은 셋집에서 그리스도 복음을 전파했다",
        ref: "Acts 28:30-31",
        text: "And Paul dwelt two whole years in his own hired house... Preaching the kingdom of God, and teaching those things which concern the Lord Jesus Christ...",
      },
      {
        id: "for-later-believers",
        theme: "For Those Who Will Believe Later",
        korean: "예수님이 말씀하시길 이것을 말함은 너희뿐만아니라 이후에 듣고 믿을 자들을 위함이다",
        ref: "John 17:20",
        text: "Neither pray I for these alone, but for them also which shall believe on me through their word;",
      },
      {
        id: "followers-of-me",
        theme: "Followers of Me",
        korean: "바올이 말하길 너희는 나의 삶과, 목적과 행위를 보았으니 나를 본받는자 되어라",
        ref: "2 Timothy 3:10",
        text: "But thou hast fully known my doctrine, manner of life, purpose, faith, longsuffering, charity, patience,",
      },
      {
        id: "persecution-world",
        theme: "Persecution in the World",
        korean: "너희는 이 복음으로 인하여 세상에서 핍박을 받으리라",
        ref: "John 16:33",
        text: "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",
      },
      {
        id: "rejoice-suffering",
        theme: "Rejoice in Suffering",
        korean: "너희가 하나님말씀떄문에 핍박과 고통을 받거든 기쁨으로 여기라. 상급이 크도다",
        ref: "Matthew 5:12",
        text: "Rejoice, and be exceeding glad: for great is your reward in heaven: for so persecuted they the prophets which were before you.",
      },
      {
        id: "god-vs-mammon",
        theme: "God vs. Mammon",
        korean: "예수님이 말씀하시길 나를 따르려냐 세상을 따르려냐 하셨다",
        ref: "Matthew 6:24",
        text: "No man can serve two masters... Ye cannot serve God and mammon.",
      },
      {
        id: "leaving-principles",
        theme: "Leaving the Principles",
        korean: "그리스도 복음의 기초원리를 떠나 장성한 분량에 이르길 원한다",
        ref: "Hebrews 6:1",
        text: "Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection;",
      },
      {
        id: "unskilful-babes",
        theme: "Unskilful Babes",
        korean: "너희는 시간으로 보건데 가르치는 자가 되어야 하지만 아직도 어린아이 같도다",
        ref: "Hebrews 5:12",
        text: "For when for the time ye ought to be teachers, ye have need that one teach you again... and are become such as have need of milk, and not of strong meat.",
      },
      {
        id: "purpose-parables",
        theme: "Purpose of Parables",
        korean: "비유로 말씀하신 목적은 너희들은 알되 저들은 들어도 깨닫지 못하게 하려는 것이다",
        ref: "Mark 4:11-12",
        text: "...Unto you it is given to know the mystery of the kingdom of God: but unto them that are without... that seeing they may see, and not perceive;",
      },
      {
        id: "adam-vs-christ",
        theme: "Adam vs. Christ",
        korean: "아담의 세대들과 예수 그리스도의 세대는 구분된다",
        ref: "1 Corinthians 15:45",
        text: "And so it is written, The first man Adam was made a living soul; the last Adam was made a quickening spirit.",
      },
      {
        id: "severed-image",
        theme: "Severed Image",
        korean: "사람이 하나님의 모양과 하나님의 성품으로 지어졌으나 하나님께 불순종으로 단절되어 그 성품을 잃게되었되어 관계가 단절되었다",
        ref: "Genesis 5:3 / Ephesians 4:18",
        text: "(Genesis 5:3) And Adam... begat a son in his own likeness, after his image; (Ephesians 4:18) Having the understanding darkened, being alienated from the life of God...",
      },
    ],
  },
  {
    id: "kingdom-new-creation",
    title: "Kingdom & New Creation",
    description: "Thy will be done, nature of the kingdom, new heaven and earth, no temple, millennial reign, no more pain.",
    verses: [
      {
        id: "thy-will-done",
        theme: "Thy Will be Done",
        korean: "뜻이 하늘에서 이루어진것같이 이땅에서도 이루어지길 위해 기도하라",
        ref: "Matthew 6:10",
        text: "Thy kingdom come. Thy will be done in earth, as it is in heaven.",
      },
      {
        id: "nature-kingdom",
        theme: "Nature of the Kingdom",
        korean: "하나님의 나라는 의, 희락, 화평이 거하는 곳이다",
        ref: "Romans 14:17",
        text: "For the kingdom of God is not meat and drink; but righteousness, and peace, and joy in the Holy Ghost.",
      },
      {
        id: "innumerable-multitude",
        theme: "Innumerable Multitude",
        korean: "그 수를 헤아릴 수 없이 많은 세마포 입은 사람들이 보였다",
        ref: "Revelation 7:9",
        text: "...lo, a great multitude, which no man could number, of all nations... clothed with white robes, and palms in their hands;",
      },
      {
        id: "new-heaven-earth",
        theme: "New Heaven and Earth",
        korean: "첫째 하늘과 땅이 사라지고, 새하늘과 새땅이 보였다",
        ref: "Revelation 21:1",
        text: "And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea.",
      },
      {
        id: "no-temple",
        theme: "No Temple Therein",
        korean: "새하늘과 새땅, 새 예루살렘에서 성전이 없었으니 예수님이 자신이 성전이셨기 때문이라",
        ref: "Revelation 21:22",
        text: "And I saw no temple therein: for the Lord God Almighty and the Lamb are the temple of it.",
      },
      {
        id: "millennial-priests",
        theme: "Millennial Temple/Priests",
        korean: "천년왕국에서 성전이 회복되고 제사를 집도하는 제사장이 보였다",
        ref: "Ezekiel 44:15",
        text: "But the priests the Levites... shall come near to me to minister unto me...",
      },
      {
        id: "nations-in-city",
        theme: "Nations in the City",
        korean: "천년왕국에 예루살렘성에는 많은 민족들이 들어왔다",
        ref: "Revelation 21:24",
        text: "And the nations of them which are saved shall walk in the light of it: and the kings of the earth do bring their glory and honour into it.",
      },
      {
        id: "no-more-pain",
        theme: "No More Pain or Death",
        korean: "새하늘과 새땅에서는 상함도 없고, 고통없고, 헤어짐도 없고, 죽는 것도 없다",
        ref: "Revelation 21:4",
        text: "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain...",
      },
    ],
  },
  {
    id: "daily-walk",
    title: "Daily Walk & Provision",
    description: "Narrow way, take no thought, seek first the kingdom, things prepared, thanksgiving, peace, walk in the Spirit.",
    audienceSuggestions: ["believers", "new believers", "mixed"],
    situationSuggestions: ["devotion", "comfort", "counsel"],
    knowledgeLevel: "any",
    verses: [
      {
        id: "narrow-way",
        theme: "The Narrow Way",
        korean: "좁은 문으로 들어가라. 멸망으로 이르는 길은 크고 넓다",
        ref: "Matthew 7:13",
        text: "Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction, and many there be which go in thereat:",
      },
      {
        id: "take-no-thought",
        theme: "Take No Thought",
        korean: "너희는 무엇을 먹을까 무엇을 마실까 무엇을 입을까 염려하지 말라",
        ref: "Matthew 6:31",
        text: "Therefore take no thought, saying, What shall we eat? or, What shall we drink? or, Wherewithal shall we be clothed?",
      },
      {
        id: "seek-first-kingdom",
        theme: "Seek First the Kingdom",
        korean: "너희는 먼저 그의 나라와 그의 의를 구하라 그러면 모든것을 주시리라",
        ref: "Matthew 6:33",
        text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
      },
      {
        id: "things-not-seen",
        theme: "Things Not Seen or Heard",
        korean: "믿는자를 위하여 하나님께서 준비하시것은 눈으로 보지못하였고, 귀로 듣지 못하였으며, 마음으로 깨닫지도 못한 것이다",
        ref: "1 Corinthians 2:9",
        text: "But as it is written, Eye hath not seen, nor ear heard, neither have entered into the heart of man, the things which God hath prepared for them that love him.",
      },
      {
        id: "give-thanks",
        theme: "Give Thanks in Everything",
        korean: "너희는 다만 모든 일에 감사하라",
        ref: "1 Thessalonians 5:18",
        text: "In every thing give thanks: for this is the will of God in Christ Jesus concerning you.",
      },
      {
        id: "peace-through-prayer",
        theme: "Peace Through Prayer",
        korean: "너희가 하려는 일을 하나님앞에 알게하라. 모든 지각에 뛰어나신 하나님이 평강을 주시리라",
        ref: "Philippians 4:6-7",
        text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts...",
      },
      {
        id: "walk-in-spirit",
        theme: "Walk in the Spirit",
        korean: "너희는 성령안에 있다면, 성령의 인도하심에 따라 살아가라",
        ref: "Galatians 5:25",
        text: "If we live in the Spirit, let us also walk in the Spirit.",
      },
    ],
  },
];

export function getTopic(id: string): TopicCategory | undefined {
  return topics.find((t) => t.id === id);
}

export function getAllVerses(): VerseEntry[] {
  return topics.flatMap((t) => t.verses);
}

export function getVerseById(id: string): VerseEntry | undefined {
  for (const topic of topics) {
    const verse = topic.verses.find((v) => v.id === id);
    if (verse) return verse;
  }
  return undefined;
}
