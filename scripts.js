(function () {
  'use strict';

  let lang = 'hi';
  const REVIEWS = [
    { name: 'Priya Sharma', nameHi: 'प्रिया शर्मा', text: 'HS Vaid ji ne mere pariwar ki samasya ka samadhan kiya. Bahut hi shant aur viswashniy vyakti hain.', textHi: 'एचएस वैद जी ने मेरे परिवार की समस्या का समाधान किया। बहुत ही शांत और विश्वसनीय व्यक्ति हैं।', stars: 5 },
    { name: 'Amit Kumar', nameHi: 'अमित कुमार', text: 'Career issues were troubling me for years. After consulting HS Vaid, everything started falling into place.', textHi: 'करियर की समस्याएं वर्षों से मुझे परेशान कर रही थीं। एचएस वैद से सलाह लेने के बाद सब कुछ ठीक होने लगा।', stars: 5 },
    { name: 'Sunita Devi', nameHi: 'सुनीता देवी', text: 'Mere pati ke saath sambandh bahut kharab ho gaye the. HS Vaid ji ne humare rishte ko dubara joda.', textHi: 'मेरे पति के साथ संबंध बहुत खराब हो गए थे। एचएस वैद जी ने हमारे रिश्ते को दुबारा जोड़ा।', stars: 5 },
    { name: 'Rahul Verma', nameHi: 'राहुल वर्मा', text: 'I was facing financial losses in my business. HS Vaid ji guided me with Red Book remedies. Now my business is profitable again.', textHi: 'मैं अपने व्यवसाय में आर्थिक नुकसान का सामना कर रहा था। एचएस वैद जी ने मुझे रेड बुक उपायों से मार्गदर्शन किया। अब मेरा व्यवसाय फिर से लाभदायक है।', stars: 5 },
    { name: 'Neha Gupta', nameHi: 'नेहा गुप्ता', text: 'Shaadi ke baad bahut samasya aa rahi thi. HS Vaid ji ki vajah se aaj meri shaadi bach gayi.', textHi: 'शादी के बाद बहुत समस्या आ रही थी। एचएस वैद जी की वजह से आज मेरी शादी बच गई।', stars: 5 },
    { name: 'Vikas Singh', nameHi: 'विकास सिंह', text: 'HS Vaid is a true gem. His predictions were accurate and remedies effective. My family problems have resolved completely.', textHi: 'एचएस वैद एक सच्चे रत्न हैं। उनकी भविष्यवाणियां सटीक और उपाय प्रभावी थे। मेरी पारिवारिक समस्याएं पूरी तरह से हल हो गई हैं।', stars: 5 },
    { name: 'Pooja Malhotra', nameHi: 'पूजा मल्होत्रा', text: 'Mere bete ki padhai mein bahut problem thi. HS Vaid ji ke upay se uski concentration badhi.', textHi: 'मेरे बेटे की पढ़ाई में बहुत प्रॉब्लम थी। एचएस वैद जी के उपाय से उसकी कॉन्संट्रेशन बढ़ी।', stars: 5 },
    { name: 'Deepak Joshi', nameHi: 'दीपक जोशी', text: 'I was skeptical at first, but HS Vaid ji proved me wrong. His Red Book remedies brought peace to my home.', textHi: 'मुझे पहले संदेह था, लेकिन एचएस वैद जी ने मुझे गलत साबित कर दिया। उनके रेड बुक उपायों ने मेरे घर में शांति ला दी।', stars: 5 },
    { name: 'Anita Agarwal', nameHi: 'अनीता अग्रवाल', text: 'Bahut dino se koi santaan nahi ho rahi thi. HS Vaid ji ke upay se aaj main ek bete ki maa ban gayi hoon.', textHi: 'बहुत दिनों से कोई संतान नहीं हो रही थी। एचएस वैद जी के उपाय से आज मैं एक बेटे की मां बन गई हूं।', stars: 5 },
    { name: 'Sanjay Arora', nameHi: 'संजय अरोड़ा', text: 'Property dispute was ruining my family. HS Vaid ji solved it with his spiritual guidance. He is truly a Red Book master.', textHi: 'प्रॉपर्टी डिस्प्यूट मेरे परिवार को बर्बाद कर रहा था। एचएस वैद जी ने इसे हल किया। वह सच में रेड बुक मास्टर हैं।', stars: 5 },
    { name: 'Kavita Rani', nameHi: 'कविता रानी', text: 'Mere pati ko sharab ki lat thi. HS Vaid ji ke upay se is problem ko khatam kar diya. Aaj ghar mein sukh shanti hai.', textHi: 'मेरे पति को शराब की लत थी। एचएस वैद जी के उपाय से यह प्रॉब्लम खत्म हो गई। आज घर में सुख शांति है।', stars: 5 },
    { name: 'Rohit Mehta', nameHi: 'रोहित मेहता', text: 'I was struggling with depression and anxiety. HS Vaid ji helped me find mental peace. His remedies are miraculous.', textHi: 'मैं डिप्रेशन और चिंता से जूझ रहा था। एचएस वैद जी ने मुझे मानसिक शांति पाने में मदद की। उनके उपाय चमत्कारी हैं।', stars: 5 },
    { name: 'Laxmi Narayan', nameHi: 'लक्ष्मी नारायण', text: 'HS Vaid ji ne mere bete ki naukari ki problem solve ki. Bahut hi acche insaan hain.', textHi: 'एचएस वैद जी ने मेरे बेटे की नौकरी की प्रॉब्लम सॉल्व की। बहुत ही अच्छे इंसान हैं।', stars: 5 },
    { name: 'Suman Verma', nameHi: 'सुमन वर्मा', text: 'Mere pati ko doosri aurat se sambandh the. HS Vaid ji ne sahi upay aur salah se hamari jindagi mein pyar laya.', textHi: 'मेरे पति को दूसरी औरत से संबंध थे। एचएस वैद जी ने सही उपाय और सलाह से हमारी जिंदगी में प्यार लाया।', stars: 5 },
    { name: 'Arun Chopra', nameHi: 'अरुण चोपड़ा', text: 'My health was deteriorating with no diagnosis. HS Vaid ji identified the root cause spiritually. Feeling much better now.', textHi: 'मेरा स्वास्थ्य बिना निदान के बिगड़ रहा था। एचएस वैद जी ने आध्यात्मिक रूप से कारण पहचाना। अब बहुत बेहतर हूं।', stars: 5 },
    { name: 'Geeta Kapoor', nameHi: 'गीता कपूर', text: 'HS Vaid ji bahut hi powerful hain. Unhone mere pitaji ki bimari ke liye upay bataye, jisse unhe aaram mila.', textHi: 'एचएस वैद जी बहुत ही पावरफुल हैं। उन्होंने पिताजी की बीमारी के उपाय बताए, जिससे उन्हें आराम मिला।', stars: 5 },
    { name: 'Manoj Tiwari', nameHi: 'मनोज तिवारी', text: 'Business partnership dispute solved by HS Vaid ji. His Red Book knowledge is extraordinary.', textHi: 'एचएस वैद जी ने व्यावसायिक विवाद हल किया। उनका रेड बुक ज्ञान असाधारण है।', stars: 5 },
    { name: 'Shashi Bala', nameHi: 'शशि बाला', text: 'Mere bete ki shaadi ke liye achha rishta nahi aa raha tha. HS Vaid ji ke upay se sab khush hain.', textHi: 'मेरे बेटे की शादी के लिए अच्छा रिश्ता नहीं आ रहा था। एचएस वैद जी के उपाय से सब खुश हैं।', stars: 5 },
    { name: 'Vijay Kumar', nameHi: 'विजय कुमार', text: 'Court case was going against me for 5 years. After HS Vaid ji guidance, the case turned in my favor.', textHi: '5 साल से कोर्ट का केस मेरे खिलाफ जा रहा था। एचएस वैद जी के मार्गदर्शन से केस मेरे पक्ष में आया।', stars: 5 },
    { name: 'Priti Jain', nameHi: 'प्रीति जैन', text: 'HS Vaid ji ne mere parivar mein aaye aarthik sankat se humein bahar nikala. Unki salah ne nayi umeed di.', textHi: 'एचएस वैद जी ने परिवार के आर्थिक संकट से हमें बाहर निकाला। उनकी सलाह ने नई उम्मीद दी।', stars: 5 },
    { name: 'Ajay Pal', nameHi: 'अजय पाल', text: 'मेरी पत्नी का मुझसे हमेशा झगड़ा होता था। HS Vaid ji ne humein samjhaya. Aaj ghar mein shanti hai.', stars: 5 },
    { name: 'Rekha Das', nameHi: 'रेखा दास', text: 'Mere bhai ko nokri nahi mil rahi thi. HS Vaid ji ke upay se uski nokri lag gayi.', textHi: 'मेरे भाई को नौकरी नहीं मिल रही थी। एचएस वैद जी के उपाय से नौकरी लग गई।', stars: 5 },
    { name: 'Suresh Chand', nameHi: 'सुरेश चंद', text: 'HS Vaid ji is a man of great spiritual power. His guidance brought miraculous results.', textHi: 'एचएस वैद जी महान आध्यात्मिक शक्ति वाले व्यक्ति हैं। उनका मार्गदर्शन चमत्कारिक है।', stars: 5 },
    { name: 'Kamlesh Bhatt', nameHi: 'कमलेश भट्ट', text: 'Mere pati ko naukari mein problem thi. HS Vaid ji ke upay se job bach gayi aur promotion mila.', textHi: 'पति को नौकरी में प्रॉब्लम थी। एचएस वैद जी के उपाय से जॉब बची और प्रमोशन मिला।', stars: 5 },
    { name: 'Naveen Garg', nameHi: 'नवीन गर्ग', text: 'I had lost all hope. HS Vaid ji fixed my relationship and guided me to become a better person.', textHi: 'मैंने सारी उम्मीद खो दी थी। एचएस वैद जी ने रिश्ता ठीक किया और बेहतर इंसान बनाया।', stars: 5 },
    { name: 'Bindia Sharma', nameHi: 'बिंदिया शर्मा', text: 'Mere beti ki shaadi mein badha aa raha tha. HS Vaid ji ne sabhi rukawatein dur kardi.', textHi: 'बेटी की शादी में बाधा आ रही थी। एचएस वैद जी ने सब रुकावटें दूर कर दीं।', stars: 5 },
    { name: 'Gaurav Sethi', nameHi: 'गौरव सेठी', text: 'HS Vaid ji ki sabse acchi baat hai woh sahi direction dikhate hain. Mere life mein positive changes aaye.', textHi: 'एचएस वैद जी सही दिशा दिखाते हैं। मेरे लाइफ में पॉजिटिव चेंजेज आए।', stars: 5 },
    { name: 'Hemlata Mishra', nameHi: 'हेमलता मिश्रा', text: 'जब मैं बहुत परेशान थी तब HS Vaid ji का नंबर मिला। उनसे बात करके सुकून मिला।', stars: 5 },
    { name: 'Pankaj Dhiman', nameHi: 'पंकज धीमान', text: 'Red Book expert truly! My entire family got peace after following his remedies.', textHi: 'सच में रेड बुक एक्सपर्ट! उनके उपायों से पूरे परिवार को शांति मिली।', stars: 5 },
    { name: 'Sarita Bansal', nameHi: 'सरिता बंसल', text: 'Mere pati ka affair chal raha tha. HS Vaid ji ne problem solve kiya. Aaj pariwar khush hai.', textHi: 'पति का अफेयर चल रहा था। एचएस वैद जी ने समस्या हल की। आज परिवार खुश है।', stars: 5 },
    { name: 'Dinesh Thakur', nameHi: 'दिनेश ठाकुर', text: 'My son was addicted to bad company. HS Vaid ji changed his life completely. Forever grateful.', textHi: 'बेटा बुरी संगत का आदी था। एचएस वैद जी ने जिंदगी बदल दी। हमेशा आभारी।', stars: 5 },
    { name: 'Ritu Saxena', nameHi: 'रितु सक्सेना', text: 'HS Vaid ji se milne ke baad life mein stability mili. Unhone sahi marg dikhaya.', textHi: 'एचएस वैद जी से मिलने के बाद जिंदगी में स्टेबिलिटी मिली। सही मार्ग दिखाया।', stars: 5 },
    { name: 'Ashok Mehra', nameHi: 'अशोक मेहरा', text: 'I was on the verge of bankruptcy. HS Vaid ji remedies brought back my lost wealth.', textHi: 'दिवालियापन के कगार पर था। एचएस वैद जी के उपायों ने खोई संपत्ति वापस लाई।', stars: 5 },
    { name: 'Rani Pal', nameHi: 'रानी पाल', text: 'Bachcha nahi ho raha tha, bahut ilaaj karaya. HS Vaid ji ke upay se main pregnant hui.', textHi: 'बच्चा नहीं हो रहा था। एचएस वैद जी के उपाय से मैं प्रेग्नेंट हुई।', stars: 5 },
    { name: 'Karan Walia', nameHi: 'करण वालिया', text: 'HS Vaid ji is different. He does not bluff or scare you. He gives honest solutions.', textHi: 'एचएस वैद जी अलग हैं। बकवास नहीं करते या डराते नहीं। ईमानदार समाधान देते हैं।', stars: 5 },
    { name: 'Maya Devi', nameHi: 'माया देवी', text: 'Mere ladke ki shaadi mein problem aa rahi thi. HS Vaid ji ki madad se sab theek hua.', textHi: 'लड़के की शादी में प्रॉब्लम आ रही थी। एचएस वैद जी की मदद से सब ठीक हुआ।', stars: 5 },
    { name: 'Sandeep Bhatia', nameHi: 'संदीप भाटिया', text: 'His Red Book expertise is unmatched. Nobody comes close to HS Vaid ji.', textHi: 'उनकी रेड बुक विशेषज्ञता बेजोड़ है। कोई एचएस वैद जी के पास नहीं आता।', stars: 5 },
    { name: 'Nirmal Kaur', nameHi: 'निर्मल कौर', text: 'HS Vaid ji ne mere parivar ki samasya ke liye acche upay bataye. Beti ki nokri lag gayi.', textHi: 'एचएस वैद जी ने परिवार की समस्या के अच्छे उपाय बताए। बेटी की नौकरी लग गई।', stars: 5 },
    { name: 'Vivek Oberoi', nameHi: 'विवेक ओबेरॉय', text: 'I was going through a tough divorce. HS Vaid ji gave me mental strength. Life is stable now.', textHi: 'तलाक के मुश्किल दौर से गुजर रहा था। एचएस वैद जी ने मानसिक शक्ति दी। जिंदगी स्थिर है।', stars: 5 },
    { name: 'Pushpa Raj', nameHi: 'पुष्पा राज', text: 'HS Vaid ji se humare ghar ki har problem ka hal mila. Woh 24x7 available rehte hain.', textHi: 'एचएस वैद जी से घर की हर प्रॉब्लम का हल मिला। वह 24x7 उपलब्ध रहते हैं।', stars: 5 },
    { name: 'Yash Gupta', nameHi: 'यश गुप्ता', text: 'My love marriage was opposed by family. HS Vaid ji made it possible. Forever indebted.', textHi: 'लव मैरिज का परिवार विरोध कर रहा था। एचएस वैद जी ने संभव बनाया। हमेशा ऋणी।', stars: 5 },
    { name: 'Leela Wati', nameHi: 'लीला वती', text: 'Mere bete ko padhai mein problem thi. HS Vaid ji ke upay se first class mein pass hua.', textHi: 'बेटे को पढ़ाई में प्रॉब्लम थी। एचएस वैद जी के उपाय से फर्स्ट क्लास में पास हुआ।', stars: 5 },
    { name: 'Harish Anand', nameHi: 'हरीश आनंद', text: 'HS Vaid ji predicted my promotion before it happened. His Red Book knowledge is divine.', textHi: 'एचएस वैद जी ने प्रमोशन की भविष्यवाणी होने से पहले कर दी। उनका ज्ञान दिव्य है।', stars: 5 },
    { name: 'Usha Kiran', nameHi: 'उषा किरण', text: 'मेरे पति कर्ज में डूबे थे। HS Vaid ji ke upay se unka saara khatam hua. नया business कर रहे हैं।', stars: 5 },
    { name: 'Mohit Sharma', nameHi: 'मोहित शर्मा', text: 'HS Vaid ji is a genuine soul. Not heavy fees or false promises. Simple yet powerful remedies.', textHi: 'एचएस वैद जी सच्ची आत्मा हैं। भारी शुल्क या झूठे वादे नहीं। सरल फिर भी शक्तिशाली उपाय।', stars: 5 },
    { name: 'Komalpreet Singh', nameHi: 'कॉमलप्रीत सिंह', text: 'Family property dispute solved without court case. His wisdom is remarkable.', textHi: 'बिना कोर्ट केस के प्रॉपर्टी विवाद हल। उनकी बुद्धिमत्ता उल्लेखनीय है।', stars: 5 },
    { name: 'Shweta Pandey', nameHi: 'श्वेता पांडेय', text: 'HS Vaid ji ne mere career ki rukawaton ko dur kiya. Aaj main achhi job mein hoon.', textHi: 'एचएस वैद जी ने करियर की रुकावटें दूर कीं। आज अच्छी जॉब में हूं।', stars: 5 },
    { name: 'Anil Kapoor', nameHi: 'अनिल कपूर', text: 'HS Vaid ji guided my son towards the right career path. He is now thriving in his field.', textHi: 'एचएस वैद जी ने मेरे बेटे को सही करियर पथ दिखाया। वह अब अपने क्षेत्र में सफल है।', stars: 5 },
    { name: 'Sonia Bajaj', nameHi: 'सोनिया बजाज', text: 'Pati se anban bahut badh gayi thi. HS Vaid ji ne humare rishte ko dubara joda.', textHi: 'पति से अनबन बहुत बढ़ गई थी। एचएस वैद जी ने रिश्ते को दुबारा जोड़ा।', stars: 5 },
    { name: 'Rajesh Khanna', nameHi: 'राजेश खन्ना', text: 'Business losses were mounting. After HS Vaid ji guidance, my profits have doubled.', textHi: 'व्यापार में नुकसान बढ़ रहा था। एचएस वैद जी के मार्गदर्शन के बाद मुनाफा दोगुना हुआ।', stars: 5 },
    { name: 'Deepa Menon', nameHi: 'दीपा मेनन', text: 'My daughter marriage was delayed. HS Vaid ji remedies got her a great match.', textHi: 'बेटी की शादी में देरी थी। एचएस वैद जी के उपाय से अच्छा रिश्ता मिला।', stars: 5 },
  ];

  const TRANS = {
    hi: {
      skip:'मुख्य सामग्री पर जाएं',nav_home:'होम',nav_about:'परिचय',nav_services:'सेवाएं',
      nav_reviews:'समीक्षाएं',nav_contact:'संपर्क',
      hero_label:'/ रेड बुक एक्सपर्ट',hero_sub:'आपकी हर समस्या का समाधान',
      hstat_cases:'केस सॉल्व',hstat_years:'साल अनुभव',
      call:'कॉल करें',wa:'व्हाट्सएप',
      about_tag:'परिचय',about_ttl:'सालों का अनुभव<br>आपकी सेवा में',
      about_txt:'HS Vaid एक प्रसिद्ध रेड बुक एक्सपर्ट हैं जिन्होंने 1000 से अधिक लोगों की जीवन समस्याओं का समाधान किया है। प्राचीन रेड बुक विधा के विशेषज्ञ, सटीक भविष्यवाणी और प्रभावी समाधान के लिए जाने जाते हैं।',
      afeat1:'100% गोपनीय',afeat2:'सटीक भविष्यवाणी',afeat3:'प्रभावी उपाय',
      srv_tag:'सेवाएं',srv_ttl:'हमारी विशेष सेवाएं',
      srv1:'प्रेम संबंधी समस्याएं',srv1d:'प्रेम जीवन में आ रही बाधाओं का समाधान।',
      srv2:'वैवाहिक जीवन समाधान',srv2d:'पति-पत्नी के रिश्ते में सुधार और खुशहाली।',
      srv3:'करियर एवं व्यापार',srv3d:'नौकरी और व्यवसाय में सफलता के उपाय।',
      srv4:'शिक्षा एवं परीक्षा',srv4d:'पढ़ाई में मन लगाने और सफलता के उपाय।',
      srv5:'गृह क्लेश समाधान',srv5d:'परिवार में शांति और सद्भाव के उपाय।',
      srv6:'आर्थिक समस्याएं',srv6d:'कर्ज और आर्थिक परेशानियों का स्थायी समाधान।',
      rev_tag:'समीक्षाएं',rev_ttl:'ग्राहक क्या कहते हैं',
      call_now_label:'तुरंत संपर्क करें',
      addr_lbl:'पता',ph_lbl:'फोन / WhatsApp',time_lbl:'समय',
      time_val:'सुबह 11 बजे – शाम 6 बजे (सभी दिन)',time_note:'WhatsApp 24x7 उपलब्ध',
      cta_ttl:'अभी कॉल करें',cta_txt:'समस्या का समाधान पाने में देर न करें।',
      foot_tag:'आपकी समस्या, हमारा समाधान।',foot_rights:'सर्वाधिकार सुरक्षित।'
    },
    en: {
      skip:'Skip to main content',nav_home:'Home',nav_about:'About',nav_services:'Services',
      nav_reviews:'Reviews',nav_contact:'Contact',
      hero_label:'/ Red Book Expert',hero_sub:'Solution for every problem',
      hstat_cases:'Cases Solved',hstat_years:'Years Experience',
      call:'Call Now',wa:'WhatsApp',
      about_tag:'About',about_ttl:'Years of Experience<br>At Your Service',
      about_txt:'HS Vaid is a renowned Red Book Expert who has solved life problems of over 1000 people. An expert in ancient Red Book techniques, known for accurate predictions and effective solutions.',
      afeat1:'100% Confidential',afeat2:'Accurate Predictions',afeat3:'Effective Remedies',
      srv_tag:'Services',srv_ttl:'Our Special Services',
      srv1:'Love Problems',srv1d:'Solutions for obstacles in love life.',
      srv2:'Marriage Solutions',srv2d:'Improving husband-wife relationships.',
      srv3:'Career & Business',srv3d:'Success in job and business.',
      srv4:'Education & Exams',srv4d:'Focus and success in studies.',
      srv5:'Family Disputes',srv5d:'Peace and harmony in the family.',
      srv6:'Financial Issues',srv6d:'Permanent solution for debts.',
      rev_tag:'Reviews',rev_ttl:'What Clients Say',
      call_now_label:'Contact Now',
      addr_lbl:'Address',ph_lbl:'Phone / WhatsApp',time_lbl:'Hours',
      time_val:'11 AM – 6 PM (All Days)',time_note:'WhatsApp 24x7 Available',
      cta_ttl:'Call Now',cta_txt:'Don\'t delay in finding your solution.',
      foot_tag:'Your problem, our solution.',foot_rights:'All Rights Reserved.'
    }
  };

  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      if (TRANS[l] && TRANS[l][k]) el.innerHTML = TRANS[l][k];
    });
    const btn = document.getElementById('langBtn');
    btn.textContent = l === 'hi' ? 'EN' : 'हि';
    btn.title = l === 'hi' ? 'English' : 'हिंदी';
    btn.setAttribute('aria-label', l === 'hi' ? 'Switch to English' : 'हिंदी में बदलें');
    renderReviews();
  }

  function renderStars(n) { return '<i class="fas fa-star" aria-hidden="true"></i>'.repeat(n); }

  function renderReviews() {
    const track = document.getElementById('revTrack');
    const dots = document.getElementById('revDots');
    if (!track) return;

    track.innerHTML = REVIEWS.map(r => {
      const name = lang === 'hi' && r.nameHi ? r.nameHi : r.name;
      const text = lang === 'hi' && r.textHi ? r.textHi : r.text;
      const ini = (r.nameHi || r.name).charAt(0);
      return `<article class="rev-card" role="listitem">
        <div class="rev-card-hd">
          <div class="rev-av" aria-hidden="true">${ini}</div>
          <div>
            <div class="rev-name">${name}</div>
            <div class="rev-stars" aria-label="${r.stars} stars">${renderStars(r.stars)}</div>
          </div>
        </div>
        <div class="rev-txt">${text}</div>
      </article>`;
    }).join('');

    dots.innerHTML = REVIEWS.map((_, i) =>
      `<button class="rev-dot${i === 0 ? ' active' : ''}" data-idx="${i}" aria-label="${lang === 'hi' ? 'समीक्षा' : 'Review'} ${i+1}" role="tab"></button>`
    ).join('');

    dots.addEventListener('click', e => {
      const dot = e.target.closest('.rev-dot');
      if (!dot) return;
      const idx = parseInt(dot.dataset.idx);
      const card = track.children[idx];
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    });

    track.addEventListener('scroll', () => {
      const idx = Math.round(track.scrollLeft / (360 + 16));
      dots.querySelectorAll('.rev-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    }, { passive: true });
  }

  function initReveal() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
      });
    }, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.rvl').forEach(el => obs.observe(el));
  }

  function initCounters() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const t = parseInt(el.dataset.count);
        let c = 0;
        const s = Math.ceil(t / 60);
        const iv = setInterval(() => {
          c += s;
          if (c >= t) { c = t; clearInterval(iv); }
          el.textContent = c;
        }, 25);
        obs.unobserve(el);
      });
    }, { threshold: .5 });
    document.querySelectorAll('.hero-num').forEach(el => obs.observe(el));
  }

  function initBar() {
    const bar = document.getElementById('bar');
    const ham = document.getElementById('hamBtn');
    const nav = document.getElementById('barNav');
    const body = document.body;

    window.addEventListener('scroll', () => bar.classList.toggle('scrolled', window.scrollY > 50), { passive: true });

    ham.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      ham.classList.toggle('open');
      ham.setAttribute('aria-expanded', open);
      body.style.overflow = open ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open'); ham.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false'); body.style.overflow = '';
      });
    });

    const secs = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      let cur = '';
      secs.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
      nav.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
    }, { passive: true });
  }

  function initRvlTags() {
    document.querySelectorAll('.tag, .ttl, .about-txt, .about-feats, .srv-card, .hero-label, .hero-title, .hero-sub, .hero-stats, .hero-acts, .hero-brand-inner, .contact-item, .cta-box, .contact-strip-inner').forEach(el => {
      if (!el.classList.contains('rvl')) el.classList.add('rvl');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initRvlTags();
    initReveal();
    initCounters();
    initBar();
    renderReviews();

    document.getElementById('langBtn').addEventListener('click', () => applyLang(lang === 'hi' ? 'en' : 'hi'));

    applyLang('hi');
  });
})();
