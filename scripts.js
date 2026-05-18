(function () {
  'use strict';

  const REVIEWS_PER_PAGE = 5;
  let currentPage = 1;
  let currentLang = 'hi';

  const reviews = [
    { name: 'Priya Sharma', nameHi: 'प्रिया शर्मा', text: 'HS Vaid ji ne mere pariwar ki samasya ka samadhan kiya. Bahut hi shant aur viswashniy vyakti hain. Mujhe unki salah se bahut labh hua.', textHi: 'एचएस वैद जी ने मेरे परिवार की समस्या का समाधान किया। बहुत ही शांत और विश्वसनीय व्यक्ति हैं। मुझे उनकी सलाह से बहुत लाभ हुआ।', stars: 5 },
    { name: 'Amit Kumar', nameHi: 'अमित कुमार', text: 'Career issues were troubling me for years. After consulting HS Vaid, everything started falling into place. Highly recommend his Red Book expertise.', textHi: 'करियर की समस्याएं वर्षों से मुझे परेशान कर रही थीं। एचएस वैद से सलाह लेने के बाद सब कुछ ठीक होने लगा। उनकी रेड बुक विशेषज्ञता की अत्यधिक अनुशंसा करता हूं।', stars: 5 },
    { name: 'Sunita Devi', nameHi: 'सुनीता देवी', text: 'Mere pati ke saath sambandh bahut kharab ho gaye the. HS Vaid ji ne humare rishte ko dubara joda. Unka aashirwad hai ki aaj hum khush hain.', textHi: 'मेरे पति के साथ संबंध बहुत खराब हो गए थे। एचएस वैद जी ने हमारे रिश्ते को दुबारा जोड़ा। उनका आशीर्वाद है कि आज हम खुश हैं।', stars: 5 },
    { name: 'Rahul Verma', nameHi: 'राहुल वर्मा', text: 'I was facing financial losses in my business. HS Vaid ji guided me with Red Book remedies. Now my business is profitable again. Truly grateful!', textHi: 'मैं अपने व्यवसाय में आर्थिक नुकसान का सामना कर रहा था। एचएस वैद जी ने मुझे रेड बुक उपायों से मार्गदर्शन किया। अब मेरा व्यवसाय फिर से लाभदायक है। सच में आभारी हूं!', stars: 5 },
    { name: 'Neha Gupta', nameHi: 'नेहा गुप्ता', text: 'Shaadi ke baad bahut samasya aa rahi thi. Mummy ne HS Vaid ji se bat karwaya. Unki vajah se aaj meri shaadi bach gayi. Thank you so much!', textHi: 'शादी के बाद बहुत समस्या आ रही थी। मम्मी ने एचएस वैद जी से बात करवाया। उनकी वजह से आज मेरी शादी बच गई। थैंक यू सो मच!', stars: 5 },
    { name: 'Vikas Singh', nameHi: 'विकास सिंह', text: 'HS Vaid is a true gem. His predictions were accurate and remedies effective. My family problems have resolved completely. God bless him.', textHi: 'एचएस वैद एक सच्चे रत्न हैं। उनकी भविष्यवाणियां सटीक और उपाय प्रभावी थे। मेरी पारिवारिक समस्याएं पूरी तरह से हल हो गई हैं। भगवान उन्हें आशीर्वाद दें।', stars: 5 },
    { name: 'Pooja Malhotra', nameHi: 'पूजा मल्होत्रा', text: 'Mere bete ki padhai mein bahut problem thi. HS Vaid ji ne kuch upay bataye jisse uski concentration badhi aur usne exam mein achhe marks liye.', textHi: 'मेरे बेटे की पढ़ाई में बहुत प्रॉब्लम थी। एचएस वैद जी ने कुछ उपाय बताए जिससे उसकी कॉन्संट्रेशन बढ़ी और उसने एग्जाम में अच्छे मार्क्स लिए।', stars: 5 },
    { name: 'Deepak Joshi', nameHi: 'दीपक जोशी', text: 'I was skeptical at first, but HS Vaid ji proved me wrong. His Red Book remedies brought peace to my home. Now my wife and I are living happily.', textHi: 'मुझे पहले संदेह था, लेकिन एचएस वैद जी ने मुझे गलत साबित कर दिया। उनके रेड बुक उपायों ने मेरे घर में शांति ला दी। अब मैं और मेरी पत्नी खुशी से रह रहे हैं।', stars: 5 },
    { name: 'Anita Agarwal', nameHi: 'अनीता अग्रवाल', text: 'Bahut dino se koi santaan nahi ho rahi thi. HS Vaid ji ke aashirwaad aur upay se aaj main ek bete ki maa ban gayi hoon. Unka jitna dhanyawad karun kam hai.', textHi: 'बहुत दिनों से कोई संतान नहीं हो रही थी। एचएस वैद जी के आशीर्वाद और उपाय से आज मैं एक बेटे की मां बन गई हूं। उनका जितना धन्यवाद करूं कम है।', stars: 5 },
    { name: 'Sanjay Arora', nameHi: 'संजय अरोड़ा', text: 'Property dispute was ruining my family. HS Vaid ji solved it with his spiritual guidance. He is truly a Red Book master. Very thankful.', textHi: 'प्रॉपर्टी डिस्प्यूट मेरे परिवार को बर्बाद कर रहा था। एचएस वैद जी ने अपने आध्यात्मिक मार्गदर्शन से इसे हल किया। वह सच में रेड बुक मास्टर हैं। बहुत आभारी हूं।', stars: 5 },
    { name: 'Kavita Rani', nameHi: 'कविता रानी', text: 'Mere pati ko sharab ki lat thi. Koi doctor kuch nahi kar paya. HS Vaid ji ne unke upay se is problem ko khatam kar diya. Aaj ghar mein sukh shanti hai.', textHi: 'मेरे पति को शराब की लत थी। कोई डॉक्टर कुछ नहीं कर पाया। एचएस वैद जी ने अपने उपाय से इस प्रॉब्लम को खत्म कर दिया। आज घर में सुख शांति है।', stars: 5 },
    { name: 'Rohit Mehta', nameHi: 'रोहित मेहता', text: 'I was struggling with depression and anxiety. HS Vaid ji consultations helped me find mental peace. His remedies are miraculous. Highly recommended!', textHi: 'मैं डिप्रेशन और चिंता से जूझ रहा था। एचएस वैद जी के परामर्श ने मुझे मानसिक शांति पाने में मदद की। उनके उपाय चमत्कारी हैं। अत्यधिक अनुशंसित!', stars: 5 },
    { name: 'Laxmi Narayan', nameHi: 'लक्ष्मी नारायण', text: 'HS Vaid ji ne mere bete ki naukari ki problem solve ki. Bahut hi acche insaan hain aur sahi guide karte hain. Unki har baat sach hoti hai.', textHi: 'एचएस वैद जी ने मेरे बेटे की नौकरी की प्रॉब्लम सॉल्व की। बहुत ही अच्छे इंसान हैं और सही गाइड करते हैं। उनकी हर बात सच होती है।', stars: 5 },
    { name: 'Suman Verma', nameHi: 'सुमन वर्मा', text: 'Mere pati ko doosri aurat se sambandh the. HS Vaid ji ne jaadu se nahi, balki sahi upay aur salah se hamari jindagi mein dubara pyar laya.', textHi: 'मेरे पति को दूसरी औरत से संबंध थे। एचएस वैद जी ने जादू से नहीं, बल्कि सही उपाय और सलाह से हमारी जिंदगी में दुबारा प्यार लाया।', stars: 5 },
    { name: 'Arun Chopra', nameHi: 'अरुण चोपड़ा', text: 'My health was deteriorating with no diagnosis. HS Vaid ji identified the root cause spiritually and guided me. Feeling much better now. Thank you!', textHi: 'मेरा स्वास्थ्य बिना किसी निदान के बिगड़ रहा था। एचएस वैद जी ने आध्यात्मिक रूप से मूल कारण की पहचान की और मेरा मार्गदर्शन किया। अब बहुत बेहतर महसूस कर रहा हूं। धन्यवाद!', stars: 5 },
    { name: 'Geeta Kapoor', nameHi: 'गीता कपूर', text: 'HS Vaid ji bahut hi powerful hain. Unhone mere pitaji ki bimari ke liye jo upay bataye, usse unhe bahut aaram mila. Main unki bahut aabhari hoon.', textHi: 'एचएस वैद जी बहुत ही पावरफुल हैं। उन्होंने मेरे पिताजी की बीमारी के लिए जो उपाय बताए, उससे उन्हें बहुत आराम मिला। मैं उनकी बहुत आभारी हूं।', stars: 5 },
    { name: 'Manoj Tiwari', nameHi: 'मनोज तिवारी', text: 'Business partnership dispute solved by HS Vaid ji. His Red Book knowledge is extraordinary. He saved my business from a major loss. Highly skilled!', textHi: 'एचएस वैद जी द्वारा व्यावसायिक साझेदारी का विवाद हल किया गया। उनका रेड बुक ज्ञान असाधारण है। उन्होंने मेरे व्यवसाय को बड़े नुकसान से बचाया। अत्यधिक कुशल!', stars: 5 },
    { name: 'Shashi Bala', nameHi: 'शशि बाला', text: 'Mere bete ki shaadi ke liye achha rishta nahi aa raha tha. HS Vaid ji ke upay se achha ladka mila aur ab sab khush hain. Unka bahut bahut dhanyawad.', textHi: 'मेरे बेटे की शादी के लिए अच्छा रिश्ता नहीं आ रहा था। एचएस वैद जी के उपाय से अच्छा लड़का मिला और अब सब खुश हैं। उनका बहुत बहुत धन्यवाद।', stars: 5 },
    { name: 'Vijay Kumar', nameHi: 'विजय कुमार', text: 'Court case was going against me for 5 years. After HS Vaid ji guidance, the case turned in my favor. His remedies are truly effective.', textHi: '5 साल से कोर्ट का केस मेरे खिलाफ जा रहा था। एचएस वैद जी के मार्गदर्शन के बाद, केस मेरे पक्ष में आ गया। उनके उपाय वास्तव में प्रभावी हैं।', stars: 5 },
    { name: 'Priti Jain', nameHi: 'प्रीति जैन', text: 'HS Vaid ji ne mere parivar mein aayi aarthik sankat se humein bahar nikala. Unki salah ne humein nayi umeed di. Sach mein bahut accha insaan hai.', textHi: 'एचएस वैद जी ने मेरे परिवार में आए आर्थिक संकट से हमें बाहर निकाला। उनकी सलाह ने हमें नई उम्मीद दी। सच में बहुत अच्छा इंसान है।', stars: 5 },
    { name: 'Ajay Pal', nameHi: 'अजय पाल', text: 'मेरी पत्नी का मुझसे हमेशा झगड़ा होता था। HS Vaid ji ne humein samjhaya aur upay bataye. Aaj ghar mein shanti hai.', stars: 5 },
    { name: 'Rekha Das', nameHi: 'रेखा दास', text: 'Mere bhai ko nokri nahi mil rahi thi. HS Vaid ji ke bataye upay se uski nokri lag gayi. Unka dil se shukriya.', textHi: 'मेरे भाई को नौकरी नहीं मिल रही थी। एचएस वैद जी के बताए उपाय से उसकी नौकरी लग गई। उनका दिल से शुक्रिया।', stars: 5 },
    { name: 'Suresh Chand', nameHi: 'सुरेश चंद', text: 'HS Vaid ji is a man of great spiritual power. His guidance on my health issues brought miraculous results. I am a living testimony to his abilities.', textHi: 'एचएस वैद जी महान आध्यात्मिक शक्ति वाले व्यक्ति हैं। मेरी स्वास्थ्य समस्याओं पर उनके मार्गदर्शन ने चमत्कारिक परिणाम लाए। मैं उनकी क्षमताओं का जीवित प्रमाण हूं।', stars: 5 },
    { name: 'Kamlesh Bhatt', nameHi: 'कमलेश भट्ट', text: 'Mere pati ko naukari mein problem thi. HS Vaid ji ke upay se unki job bach gayi aur promotion bhi mila. Sachi mein bahut badiya insaan.', textHi: 'मेरे पति को नौकरी में प्रॉब्लम थी। एचएस वैद जी के उपाय से उनकी जॉब बच गई और प्रमोशन भी मिला। सच में बहुत बढ़िया इंसान।', stars: 5 },
    { name: 'Naveen Garg', nameHi: 'नवीन गर्ग', text: 'I had lost all hope in love. HS Vaid ji not only fixed my relationship but also guided me to become a better person. Truly life-changing experience.', textHi: 'मैंने प्यार में सारी उम्मीद खो दी थी। एचएस वैद जी ने न केवल मेरे रिश्ते को ठीक किया बल्कि मुझे एक बेहतर इंसान बनने का मार्गदर्शन भी दिया। सच में जीवन बदलने वाला अनुभव।', stars: 5 },
    { name: 'Bindia Sharma', nameHi: 'बिंदिया शर्मा', text: 'Mere beti ki shaadi mein bahut badha aa raha tha. HS Vaid ji ne sabhi rukawatein dur kardi. Aaj meri beti khushi se apne ghar mein hai.', textHi: 'मेरी बेटी की शादी में बहुत बाधा आ रही थी। एचएस वैद जी ने सभी रुकावटें दूर कर दी। आज मेरी बेटी खुशी से अपने घर में है।', stars: 5 },
    { name: 'Gaurav Sethi', nameHi: 'गौरव सेठी', text: 'HS Vaid ji ki sabse acchi baat yeh hai ki woh aapko sahi direction dikhate hain. Maine unki batayi hui cheezon ko follow kiya aur mere life mein positive changes aaye.', textHi: 'एचएस वैद जी की सबसे अच्छी बात यह है कि वह आपको सही दिशा दिखाते हैं। मैंने उनकी बताई हुई चीजों को फॉलो किया और मेरे लाइफ में पॉजिटिव चेंजेज आए।', stars: 5 },
    { name: 'Hemlata Mishra', nameHi: 'हेमलता मिश्रा', text: 'जब मैं बहुत परेशान थी तब किसी ने HS Vaid ji का नंबर दिया। उनसे बात करके बहुत सुकून मिला। उनकी बातों में सच्चाई है।', stars: 5 },
    { name: 'Pankaj Dhiman', nameHi: 'पंकज धीमान', text: 'Red Book expert truly! My entire family got peace after following his remedies. Problems that seemed unsolvable vanished within months. Amazing!', textHi: 'सच में रेड बुड एक्सपर्ट! उनके उपायों को अपनाने के बाद मेरे पूरे परिवार को शांति मिली। जो समस्याएं अनसुलझी लग रही थीं, वे महीनों में गायब हो गईं। अद्भुत!', stars: 5 },
    { name: 'Sarita Bansal', nameHi: 'सरिता बंसल', text: 'Mere pati ka kisi aur se affair chal raha tha. HS Vaid ji ne bahut sambhal kar humari problem ko solve kiya. Aaj humara pariwar dubara khush hai.', textHi: 'मेरे पति का किसी और से अफेयर चल रहा था। एचएस वैद जी ने बहुत संभाल कर हमारी समस्या को हल किया। आज हमारा परिवार दुबारा खुश है।', stars: 5 },
    { name: 'Dinesh Thakur', nameHi: 'दिनेश ठाकुर', text: 'My son was addicted to bad company. HS Vaid ji guidance changed his life completely. Now he is focused on his career. Forever grateful to him.', textHi: 'मेरा बेटा बुरी संगत का आदी था। एचएस वैद जी के मार्गदर्शन ने उसकी जिंदगी पूरी तरह से बदल दी। अब वह अपने करियर पर फोकस है। हमेशा उनका आभारी रहूंगा।', stars: 5 },
    { name: 'Ritu Saxena', nameHi: 'रितु सक्सेना', text: 'HS Vaid ji se milne ke baad maine apni life mein stability payi. Unhone mujhe sahi marg dikhaya. Main unki bahut bada aabhari hoon. Dhanyawad!', textHi: 'एचएस वैद जी से मिलने के बाद मैंने अपनी लाइफ में स्टेबिलिटी पाई। उन्होंने मुझे सही मार्ग दिखाया। मैं उनकी बहुत बड़ी आभारी हूं। धन्यवाद!', stars: 5 },
    { name: 'Ashok Mehra', nameHi: 'अशोक मेहरा', text: 'I was on the verge of bankruptcy. HS Vaid ji remedies brought back my lost wealth. His predictions about my business were shockingly accurate.', textHi: 'मैं दिवालियापन के कगार पर था। एचएस वैद जी के उपायों ने मेरी खोई हुई संपत्ति वापस लाई। मेरे व्यवसाय के बारे में उनकी भविष्यवाणियां चौंकाने वाली सटीक थीं।', stars: 5 },
    { name: 'Rani Pal', nameHi: 'रानी पाल', text: 'Bachcha nahi ho raha tha, bahut ilaaj karaya but koi fayda nahi hua. HS Vaid ji ke upay se main pregnant hui. Unka jitna shukriya karein kam hai.', textHi: 'बच्चा नहीं हो रहा था, बहुत इलाज कराया लेकिन कोई फायदा नहीं हुआ। एचएस वैद जी के उपाय से मैं प्रेग्नेंट हुई। उनका जितना शुक्रिया करें कम है।', stars: 5 },
    { name: 'Karan Walia', nameHi: 'करण वालिया', text: 'HS Vaid ji is different from other astrologers I have met. He does not bluff or scare you. He gives honest and practical solutions. Highly trustworthy.', textHi: 'एचएस वैद जी उन ज्योतिषियों से अलग हैं जिनसे मैं मिला हूं। वह बकवास नहीं करते या डराते नहीं। वह ईमानदार और व्यावहारिक समाधान देते हैं। अत्यधिक विश्वसनीय।', stars: 5 },
    { name: 'Maya Devi', nameHi: 'माया देवी', text: 'Mere ladke ki shaadi mein bahut problem aa rahi thi. HS Vaid ji ki madad se sab theek hua. Aaj main khush hoon aur unka bahut aabhari.', textHi: 'मेरे लड़के की शादी में बहुत प्रॉब्लम आ रही थी। एचएस वैद जी की मदद से सब ठीक हुआ। आज मैं खुश हूं और उनकी बहुत आभारी।', stars: 5 },
    { name: 'Sandeep Bhatia', nameHi: 'संदीप भाटिया', text: 'His Red Book expertise is unmatched. I have seen many astrologers but nobody comes close to HS Vaid ji. He is the real deal. Period.', textHi: 'उनकी रेड बुड विशेषज्ञता बेजोड़ है। मैंने कई ज्योतिषियों को देखा है लेकिन कोई एचएस वैद जी के पास नहीं आता। वह असली हैं। पीरियड।', stars: 5 },
    { name: 'Nirmal Kaur', nameHi: 'निर्मल कौर', text: 'Mere parivar mein aayi samasya ke liye HS Vaid ji ne bahut acche upay bataye. Unki madad se meri beti ki nokri lag gayi. Main unki bahut aabhari hoon.', textHi: 'मेरे परिवार में आई समस्या के लिए एचएस वैद जी ने बहुत अच्छे उपाय बताए। उनकी मदद से मेरी बेटी की नौकरी लग गई। मैं उनकी बहुत आभारी हूं।', stars: 5 },
    { name: 'Vivek Oberoi', nameHi: 'विवेक ओबेरॉय', text: 'I was going through a tough divorce phase. HS Vaid ji not only gave me legal guidance but also mental strength. My life is stable now because of him.', textHi: 'मैं तलाक के मुश्किल दौर से गुजर रहा था। एचएस वैद जी ने न केवल मुझे कानूनी मार्गदर्शन दिया बल्कि मानसिक शक्ति भी दी। उनकी वजह से आज मेरी जिंदगी स्थिर है।', stars: 5 },
    { name: 'Pushpa Raj', nameHi: 'पुष्पा राज', text: 'HS Vaid ji se humare ghar ki har problem ka hal mila. Woh bahut acche hain aur kabhi bhi unse baat kar sakte hain. 24x7 available rehte hain.', textHi: 'एचएस वैद जी से हमारे घर की हर प्रॉब्लम का हल मिला। वह बहुत अच्छे हैं और कभी भी उनसे बात कर सकते हैं। 24x7 अवेलेबल रहते हैं।', stars: 5 },
    { name: 'Yash Gupta', nameHi: 'यश गुप्ता', text: 'My love marriage was opposed by family. HS Vaid ji made it possible with his guidance. Today we are happily married. Forever indebted to him.', textHi: 'मेरी लव मैरिज का परिवार विरोध कर रहा था। एचएस वैद जी ने अपने मार्गदर्शन से इसे संभव बनाया। आज हम खुशी से शादीशुदा हैं। हमेशा उनके ऋणी रहेंगे।', stars: 5 },
    { name: 'Leela Wati', nameHi: 'लीला वती', text: 'Mere bete ko padhai mein bahut problem thi. Woh fail ho jaata tha. HS Vaid ji ke upay se aaj woh first class mein pass hua. Unka bahut badiya.', textHi: 'मेरे बेटे को पढ़ाई में बहुत प्रॉब्लम थी। वह फेल हो जाता था। एचएस वैद जी के उपाय से आज वह फर्स्ट क्लास में पास हुआ। उनका बहुत बढ़िया।', stars: 5 },
    { name: 'Harish Anand', nameHi: 'हरीश आनंद', text: 'His accurate predictions left me amazed. HS Vaid ji predicted my promotion before it happened. His Red Book knowledge is truly divine. A must consult!', textHi: 'उनकी सटीक भविष्यवाणियों ने मुझे चकित कर दिया। एचएस वैद जी ने मेरे प्रमोशन की भविष्यवाणी होने से पहले ही कर दी थी। उनका रेड बुक ज्ञान सचमुच दिव्य है। एक बार जरूर मिलें!', stars: 5 },
    { name: 'Usha Kiran', nameHi: 'उषा किरण', text: 'मेरे पति को कर्ज में डूबे हुए 5 साल हो गए थे। HS Vaid ji ke upay se unka saara khatam hua aur aaj woh naya business kar rahe hain. Unka dil se dhanyawad.', stars: 5 },
    { name: 'Mohit Sharma', nameHi: 'मोहित शर्मा', text: 'HS Vaid ji is a genuine soul. He does not charge heavily or make false promises. His remedies are simple yet powerful. Blessed to have found him.', textHi: 'एचएस वैद जी एक सच्ची आत्मा हैं। वह भारी शुल्क नहीं लेते या झूठे वादे नहीं करते। उनके उपाय सरल फिर भी शक्तिशाली हैं। धन्य हूं कि उन्हें पाया।', stars: 5 },
    { name: 'Komalpreet Singh', nameHi: 'कॉमलप्रीत सिंह', text: 'Family dispute over property was solved by HS Vaid ji without any court case. His wisdom and patience are remarkable. Highly recommend his services.', textHi: 'एचएस वैद जी द्वारा बिना किसी कोर्ट केस के परिवार की प्रॉपर्टी डिस्प्यूट हल किया गया। उनकी बुद्धिमत्ता और धैर्य उल्लेखनीय हैं। उनकी सेवाओं की अत्यधिक अनुशंसा करता हूं।', stars: 5 },
    { name: 'Shweta Pandey', nameHi: 'श्वेता पांडेय', text: 'HS Vaid ji ne mere career mein aayi rukawaton ko dur kiya. Aaj main ek achhi job mein hoon aur confident bhi hoon. Unka bahut bahut shukriya.', textHi: 'एचएस वैद जी ने मेरे करियर में आई रुकावटों को दूर किया। आज मैं एक अच्छी जॉब में हूं और कॉन्फिडेंट भी हूं। उनका बहुत बहुत शुक्रिया।', stars: 5 },
  ];

  const translations = {
    hi: {
      nav_home: 'होम', nav_about: 'परिचय', nav_reviews: 'समीक्षाएं', nav_contact: 'संपर्क',
      hero_badge: 'रेड बुक एक्सपर्ट', hero_title_sub: 'ज्योतिषी',
      hero_desc: '1000+ सफल केसों के साथ एक विश्वसनीय ज्योतिषीय समाधान। आपकी हर समस्या का समाधान रेड बुक के माध्यम से।',
      stat_cases: 'केस सॉल्व', stat_clients: 'संतुष्ट ग्राहक', stat_years: 'साल का अनुभव',
      call_now: 'कॉल करें', whatsapp: 'व्हाट्सएप',
      about_tag: 'परिचय', about_title: 'जानिए हमारे बारे में',
      about_desc: 'HS Vaid एक प्रसिद्ध रेड बुक एक्सपर्ट हैं जिन्होंने 1000 से अधिक लोगों की जीवन समस्याओं का समाधान किया है।',
      about_card1_title: 'रेड बुक एक्सपर्ट', about_card1_desc: 'प्राचीन रेड बुक विधा के विशेषज्ञ, जो सटीक भविष्यवाणी और प्रभावी समाधान के लिए जाने जाते हैं।',
      about_card2_title: '1000+ सफल केस', about_card2_desc: '1000 से अधिक संतुष्ट ग्राहकों के साथ एक सिद्ध ट्रैक रिकॉर्ड। हर मामले को व्यक्तिगत रूप से संभाला जाता है।',
      about_card3_title: '24x7 उपलब्ध', about_card3_desc: 'कॉल और व्हाट्सएप 24x7 उपलब्ध। कार्यालय समय: सुबह 11 बजे से शाम 6 बजे तक (सभी दिन)।',
      services_tag: 'सेवाएं', services_title: 'हमारी विशेष सेवाएं',
      srv1: 'प्रेम संबंधी समस्याएं', srv2: 'वैवाहिक जीवन समाधान', srv3: 'करियर एवं व्यापार',
      srv4: 'शिक्षा एवं परीक्षा', srv5: 'गृह क्लेश समाधान', srv6: 'आर्थिक समस्याएं',
      reviews_tag: 'समीक्षाएं', reviews_title: 'हमारे संतुष्ट ग्राहक',
      reviews_desc: '50 से अधिक संतुष्ट ग्राहकों की समीक्षाएं। ये हैं उनमें से कुछ।',
      contact_tag: 'संपर्क', contact_title: 'हमसे संपर्क करें',
      contact_desc: 'आज ही संपर्क करें और अपनी समस्या का समाधान पाएं।',
      address_label: 'पता', phone_label: 'फोन', timing_label: 'कार्यालय समय',
      timing_value: 'सुबह 11 बजे से शाम 6 बजे तक (सभी दिन)',
      timing_note: 'कॉल और व्हाट्सएप 24x7 उपलब्ध',
      cta_title: 'तुरंत संपर्क करें', cta_desc: 'अपनी समस्या का समाधान पाने के लिए आज ही कॉल या व्हाट्सएप करें।',
      footer_tagline: 'आपकी समस्या, हमारा समाधान। रेड बुक एक्सपर्ट HS Vaid के साथ जुड़ें।',
      footer_rights: 'सर्वाधिकार सुरक्षित।'
    },
    en: {
      nav_home: 'Home', nav_about: 'About', nav_reviews: 'Reviews', nav_contact: 'Contact',
      hero_badge: 'Red Book Expert', hero_title_sub: 'Astrologer',
      hero_desc: 'A trusted astrological solution with 1000+ successful cases. Your every problem solved through the Red Book.',
      stat_cases: 'Cases Solved', stat_clients: 'Happy Clients', stat_years: 'Years Experience',
      call_now: 'Call Now', whatsapp: 'WhatsApp',
      about_tag: 'About', about_title: 'Know About Us',
      about_desc: 'HS Vaid is a renowned Red Book Expert who has solved life problems of over 1000 people.',
      about_card1_title: 'Red Book Expert', about_card1_desc: 'An expert in ancient Red Book techniques, known for accurate predictions and effective solutions.',
      about_card2_title: '1000+ Cases Solved', about_card2_desc: 'A proven track record with over 1000 satisfied clients. Every case handled personally.',
      about_card3_title: '24x7 Available', about_card3_desc: 'Call and WhatsApp available 24x7. Office hours: 11 AM to 6 PM (All Days).',
      services_tag: 'Services', services_title: 'Our Special Services',
      srv1: 'Love Problems', srv2: 'Marriage Solutions', srv3: 'Career & Business',
      srv4: 'Education & Exams', srv5: 'Family Disputes', srv6: 'Financial Issues',
      reviews_tag: 'Reviews', reviews_title: 'Our Happy Clients',
      reviews_desc: 'Reviews from 50+ satisfied clients. Here are some of them.',
      contact_tag: 'Contact', contact_title: 'Contact Us',
      contact_desc: 'Contact us today and get a solution to your problem.',
      address_label: 'Address', phone_label: 'Phone', timing_label: 'Office Hours',
      timing_value: '11 AM to 6 PM (All Days)',
      timing_note: 'Call & WhatsApp 24x7 Available',
      cta_title: 'Contact Now', cta_desc: 'Call or WhatsApp today to get a solution to your problem.',
      footer_tagline: 'Your problem, our solution. Connect with Red Book Expert HS Vaid.',
      footer_rights: 'All Rights Reserved.'
    }
  };

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    const toggleBtn = document.getElementById('langToggle');
    toggleBtn.textContent = lang === 'hi' ? 'EN' : 'हि';
    toggleBtn.title = lang === 'hi' ? 'English' : 'हिंदी';
    renderReviews();
  }

  function renderStars(count) {
    return '<i class="fas fa-star"></i>'.repeat(count);
  }

  function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    const pagination = document.getElementById('reviewsPagination');
    const start = (currentPage - 1) * REVIEWS_PER_PAGE;
    const end = start + REVIEWS_PER_PAGE;
    const pageReviews = reviews.slice(start, end);
    const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

    grid.innerHTML = pageReviews.map(r => {
      const name = currentLang === 'hi' && r.nameHi ? r.nameHi : r.name;
      const text = currentLang === 'hi' && r.textHi ? r.textHi : r.text;
      const initial = (r.nameHi || r.name).charAt(0);
      return `
        <div class="review-card">
          <div class="review-header">
            <div class="review-avatar">${initial}</div>
            <div>
              <div class="review-name">${name}</div>
              <div class="review-stars">${renderStars(r.stars)}</div>
            </div>
          </div>
          <div class="review-text">${text}</div>
        </div>
      `;
    }).join('');

    pagination.innerHTML = Array.from({ length: totalPages }, (_, i) => `
      <button class="page-btn ${i + 1 === currentPage ? 'active' : ''}" data-page="${i + 1}">${i + 1}</button>
    `).join('');

    pagination.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        currentPage = parseInt(this.dataset.page);
        renderReviews();
        document.getElementById('reviews').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function createParticles() {
    const canvas = document.createElement('canvas');
    const bg = document.getElementById('particles-bg');
    bg.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];

    function resize() {
      w = canvas.width = bg.offsetWidth;
      h = canvas.height = bg.offsetHeight;
    }

    function initParticles() {
      particles = [];
      const count = Math.min(Math.floor(w * h / 12000), 80);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 0.5,
          a: Math.random() * 0.4 + 0.1
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.a})`;
        ctx.fill();
      });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.06 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => { resize(); initParticles(); });
    resize();
    initParticles();
    draw();
  }

  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          let current = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = current;
          }, 25);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
  }

  function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });

    // Active link tracking
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        const top = s.offsetTop - 100;
        if (window.scrollY >= top) current = s.id;
      });
      links.querySelectorAll('a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    animateCounters();
    initNavbar();

    document.getElementById('langToggle').addEventListener('click', function () {
      const newLang = currentLang === 'hi' ? 'en' : 'hi';
      applyLanguage(newLang);
    });

    applyLanguage('hi');
  });

})();
