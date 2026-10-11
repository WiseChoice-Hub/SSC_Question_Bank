/* SUBSECTION: Recent Appointments  (section: Current Affairs)
   Each set holds 25 questions. To add a set, copy the { title, questions } block,
   put a comma after the previous set, and change the title (Set 2, Set 3 ...).
   correct is 0 for the 1st option, 1 for the 2nd, 2 for the 3rd, 3 for the 4th. */
const SUBJECT_APPT = {
  name: "Recent Appointments",
  icon: "🧑‍💼",
  sets: [
    {
      title: "Set 1",
      questions: [
        {
          question: "Who was appointed as India's next Chief of Defence Staff (CDS), succeeding Anil Chauhan?",
          options: [
            "Krishna Swaminathan",
            "N S Raja Subramani",
            "Dinesh K Tripathi",
            "Anil Chauhan"
          ],
          correct: 1,
          explanation: "Lieutenant General N S Raja Subramani was appointed as India's next CDS, succeeding Anil Chauhan. He previously served as Military Adviser at the National Security Council Secretariat and Vice Chief of the Army Staff."
        },
        {
          question: "Who succeeded Gen Upendra Dwivedi as the Chief of the Army Staff (COAS) on June 30, 2026?",
          options: [
            "Lt Gen Manoj Pande",
            "Lt Gen MV Suchindra Kumar",
            "Lt Gen Dhiraj Seth",
            "Lt Gen NS Raja Subramani"
          ],
          correct: 2,
          explanation: "Lt Gen Dhiraj Seth, who was serving as Vice Chief of the Army Staff, assumed the role of COAS upon Gen Upendra Dwivedi's retirement."
        },
        {
          question: "Admiral Krishna Swaminathan assumed charge as the 27th Chief of the Naval Staff in June 2026. Whom did he succeed?",
          options: [
            "Admiral R. Hari Kumar",
            "Admiral Karambir Singh",
            "Admiral Dinesh K. Tripathi",
            "Admiral Sunil Lanba"
          ],
          correct: 2,
          explanation: "Admiral Krishna Swaminathan succeeded Admiral Dinesh K. Tripathi to lead the Indian Navy as the 27th Chief of the Naval Staff."
        },
        {
          question: "Who was appointed as the new Director of the Intelligence Bureau (IB), succeeding Tapan Kumar Deka?",
          options: [
            "Mahesh Dixit",
            "Ravi Sinha",
            "Subodh Kumar Jaiswal",
            "Samant Goel"
          ],
          correct: 0,
          explanation: "Mahesh Dixit, previously Special Director at the IB, assumed office as the new IB Director on 30 June 2026, succeeding Tapan Kumar Deka."
        },
        {
          question: "Which senior IPS officer was appointed as the Director General (DG) of the National Investigation Agency (NIA) in January 2026?",
          options: [
            "Sadanand Vasant Date",
            "Subodh Kumar Jaiswal",
            "Rakesh Aggarwal",
            "Tapan Kumar Deka"
          ],
          correct: 2,
          explanation: "Senior IPS officer Rakesh Aggarwal (1994-batch, Himachal Pradesh cadre) succeeded Sadanand Vasant Date as the Director General of the NIA."
        },
        {
          question: "Who was given the additional charge as DRDO Chairman following Samir Kamat's retirement in May 2026?",
          options: [
            "S. Somnath",
            "Rajesh Kumar Singh",
            "G. Satheesh Reddy",
            "Avinash Chander"
          ],
          correct: 1,
          explanation: "Rajesh Kumar Singh, who serves as the Defence Secretary of India, assumed the additional charge of DRDO Chairman on 31 May 2026 following Samir Kamat's retirement."
        },
        {
          question: "Which senior IFS officer was appointed as India's next ambassador to China, succeeding Pradeep Kumar Rawat?",
          options: [
            "Vikram Misri",
            "Vikram Doraiswami",
            "P Kumaran",
            "Harsh Vardhan Shringla"
          ],
          correct: 1,
          explanation: "Senior diplomat Vikram Doraiswami (1992 batch IFS officer, formerly High Commissioner to the UK) was appointed as India's new Ambassador to China, succeeding Pradeep Kumar Rawat."
        },
        {
          question: "Who was appointed as the next Ambassador of India to the Sultanate of Oman in May 2026?",
          options: [
            "Godavarthi Venkata Srinivas",
            "Prashant Pise",
            "Senthil Pandian",
            "Tsegab Kebebew Daka"
          ],
          correct: 1,
          explanation: "Prashant Pise was appointed as the next Ambassador of India to Oman in Muscat, succeeding Godavarthi Venkata Srinivas."
        },
        {
          question: "Which IFS officer was recently appointed as the next Ambassador of India to the Kingdom of Thailand?",
          options: [
            "Vinay Mohan Kwatra",
            "Puneet Agrawal",
            "Taranjit Singh Sandhu",
            "Navdeep Suri"
          ],
          correct: 1,
          explanation: "IFS officer Puneet Agrawal, previously Additional Secretary in the Ministry of External Affairs, was appointed as India's Ambassador to Thailand."
        },
        {
          question: "The Ministry of External Affairs appointed which former Union Minister for Railways as India's next High Commissioner to Bangladesh?",
          options: [
            "Prashant Pise",
            "Dinesh Trivedi",
            "Vinay Kwatra",
            "Senthil Pandian"
          ],
          correct: 1,
          explanation: "Former Union Minister for Railways Dinesh Trivedi was appointed India's High Commissioner to Bangladesh to strengthen bilateral diplomatic engagement."
        },
        {
          question: "Who was appointed as India's next Executive Director at the World Bank in Washington, D.C., for a three-year term?",
          options: [
            "Parameswaran Iyer",
            "Rajesh Khullar",
            "Neelkanth Mishra",
            "Subhash Chandra Garg"
          ],
          correct: 2,
          explanation: "The Appointments Committee of the Cabinet approved Neelkanth Mishra's appointment as Executive Director representing India at the World Bank."
        },
        {
          question: "Who took oath as West Bengal's first BJP Chief Minister on May 9, 2026?",
          options: [
            "Mamata Banerjee",
            "Suvendu Adhikari",
            "R. N. Ravi",
            "Himanta Biswa Sarma"
          ],
          correct: 1,
          explanation: "Suvendu Adhikari became West Bengal's first BJP Chief Minister, taking the oath administered by Governor R. N. Ravi after winning both Bhabanipur and Nandigram seats."
        },
        {
          question: "Who was sworn in as the Chief Minister of Assam for a second consecutive term on May 12, 2026?",
          options: [
            "Lakshman Prasad Acharya",
            "V. D. Satheesan",
            "N. Rangasamy",
            "Himanta Biswa Sarma"
          ],
          correct: 3,
          explanation: "BJP leader Himanta Biswa Sarma was sworn in as Chief Minister of Assam for a second consecutive term by Governor Lakshman Prasad Acharya."
        },
        {
          question: "Who took the oath as the Chief Minister of Puducherry for his fifth term in May 2026?",
          options: [
            "V. D. Satheesan",
            "N. Rangasamy",
            "K. Kailashnathan",
            "Suvendu Adhikari"
          ],
          correct: 1,
          explanation: "N. Rangasamy, founder of the All India N.R. Congress, was sworn in as Chief Minister of Puducherry for his fifth term by Lieutenant Governor K. Kailashnathan."
        },
        {
          question: "Who was sworn in as the 13th Chief Minister of Kerala following the United Democratic Front's decisive election victory in May 2026?",
          options: [
            "V. D. Satheesan",
            "N. Rangasamy",
            "Himanta Biswa Sarma",
            "Suvendu Adhikari"
          ],
          correct: 0,
          explanation: "Senior Congress leader V. D. Satheesan was sworn in as the 13th Chief Minister of Kerala following UDF's decisive victory."
        },
        {
          question: "Senior BJP leader Samrat Choudhary was sworn in as the 21st Chief Minister of which Indian state?",
          options: [
            "Assam",
            "Bihar",
            "West Bengal",
            "Kerala"
          ],
          correct: 1,
          explanation: "Samrat Choudhary was sworn in as the 21st Chief Minister of Bihar by Governor Syed Ata Hasnain, replacing Nitish Kumar."
        },
        {
          question: "Shiv Pratap Shukla, the former Governor of Himachal Pradesh, was recently transferred and appointed as the Governor of which state?",
          options: [
            "Maharashtra",
            "Nagaland",
            "Bihar",
            "Telangana"
          ],
          correct: 3,
          explanation: "President Murmu transferred Shiv Pratap Shukla from Himachal Pradesh to become the Governor of Telangana."
        },
        {
          question: "Which veteran economist and former Chief Economic Adviser (2002-2007) was appointed as the Vice-Chairman of NITI Aayog?",
          options: [
            "Ashok Lahiri",
            "Suman Bery",
            "Rohit Jain",
            "R. Balasubramaniam"
          ],
          correct: 0,
          explanation: "Ashok Lahiri was appointed Vice-Chairman of NITI Aayog, replacing Suman Bery."
        },
        {
          question: "Who took additional charge as the CEO of NITI Aayog after BVR Subrahmanyam completed his tenure in 2026?",
          options: [
            "Suman Bery",
            "Amitabh Kant",
            "Parameswaran Iyer",
            "Nidhi Chhibber"
          ],
          correct: 3,
          explanation: "Nidhi Chhibber, Director General of the Development Monitoring and Evaluation Office (DMEO), assumed additional charge as CEO of NITI Aayog."
        },
        {
          question: "Who was appointed as the Vigilance Commissioner in the Central Vigilance Commission (CVC) by President Droupadi Murmu?",
          options: [
            "Sanjay Kothari",
            "Praveen Vashista",
            "Suresh N. Patel",
            "P. K. Srivastava"
          ],
          correct: 1,
          explanation: "President Droupadi Murmu appointed Praveen Vashista (1991-batch IPS officer, Bihar cadre) as Vigilance Commissioner in the CVC."
        },
        {
          question: "Who assumed charge as the new Chief Executive Officer of the Unique Identification Authority of India (UIDAI)?",
          options: [
            "Nandan Nilekani",
            "Saurabh Vijay",
            "Ashok Kumar Panda",
            "Rohit Jain"
          ],
          correct: 1,
          explanation: "Saurabh Vijay assumed charge as the Chief Executive Officer of UIDAI."
        },
        {
          question: "Who took charge as the CEO of the IndiaAI Mission in June 2026?",
          options: [
            "Sudeep Shrivastava",
            "Saurabh Vijay",
            "Abhishek Singh",
            "Amitesh Kumar Sinha"
          ],
          correct: 1,
          explanation: "Saurabh Vijay (CEO of UIDAI) was given additional charge as CEO of the IndiaAI Mission, while Sudeep Shrivastava was named COO."
        },
        {
          question: "Tushar Mehta was reappointed for a three-year term starting July 1, 2026, to which constitutional post?",
          options: [
            "Attorney General for India",
            "Solicitor General of India",
            "Chief Justice of India",
            "Central Vigilance Commissioner"
          ],
          correct: 1,
          explanation: "Tushar Mehta was reappointed as the Solicitor General of India for a three-year term starting July 1, 2026."
        },
        {
          question: "Who was appointed as the Chairman of Prasar Bharati by the Ministry of Information and Broadcasting?",
          options: [
            "Shashi Shekhar Vempati",
            "Prasoon Joshi",
            "R. Balasubramaniam",
            "Sanjay Malhotra"
          ],
          correct: 1,
          explanation: "Prasoon Joshi was appointed Chairman of Prasar Bharati by the Ministry of Information and Broadcasting."
        },
        {
          question: "Who was appointed as the Chairperson of the Central Board of Film Certification (CBFC) for a 3-year term, succeeding Prasoon Joshi?",
          options: [
            "Prasoon Joshi",
            "R. Balasubramaniam",
            "Shashi Shekhar Vempati",
            "Saurabh Vijay"
          ],
          correct: 2,
          explanation: "Shashi Shekhar Vempati was appointed Chairperson of the CBFC for a 3-year term, succeeding Prasoon Joshi."
        }
      ]
    },
    {
       title: "Set 2",
      questions: [
        {
          question: "Who took charge as the Chairman & Managing Director of Steel Authority of India Limited (SAIL) on May 9, 2026?",
          options: [
            "Ashok Kumar Panda",
            "Saurabh Vijay",
            "Sahdev Yadav",
            "T. Rabi Sankar"
          ],
          correct: 0,
          explanation: "Dr. Ashok Kumar Panda was appointed Chairman & Managing Director of SAIL, having previously served as Director (Finance) and Director (Commercial)."
        },
        {
          question: "Who was elected unopposed as the President of the South Asian Weightlifting Federation (SAWF)?",
          options: [
            "Sahdev Yadav",
            "Sabina Yadav",
            "Saurabh Vijay",
            "R. Balasubramaniama"
          ],
          correct: 0,
          explanation: "Sahdev Yadav was elected unopposed as President of SAWF, while Sabina Yadav was appointed CEO."
        },
        {
          question: "Which former WHO Chief Scientist became the second Indian woman scientist to be elected as a Fellow of the Royal Society?",
          options: [
            "Gagandeep Kang",
            "Soumya Swaminathan",
            "Sabina Yadav",
            "Joram Aniya"
          ],
          correct: 1,
          explanation: "Dr. Soumya Swaminathan was elected Fellow of the Royal Society (FRS), becoming the second Indian woman scientist to receive the honour after Gagandeep Kang."
        },
        {
          question: "Which Indian diplomat was re-elected to the UN Committee on Economic, Social and Cultural Rights (CESCR) during India's sweep of four ECOSOC bodies?",
          options: [
            "Preeti Saran",
            "Sudha Murty",
            "Jyoti Vij",
            "P. V. Sindhu"
          ],
          correct: 0,
          explanation: "Preeti Saran was re-elected to the UN Committee on Economic, Social and Cultural Rights (CESCR) by acclamation."
        },
        {
          question: "Who was appointed as the first female Army Chief of the Australian Defence Force, marking a historic milestone in the country's military history?",
          options: [
            "Susan Coyle",
            "Christine Koch",
            "Natalie Obiko",
            "Lin King"
          ],
          correct: 0,
          explanation: "Susan Coyle was appointed the first female Army Chief of Australia by Prime Minister Anthony Albanese, becoming the first woman to lead any Australian military service branch."
        },
        {
          question: "The Federation of Indian Chambers of Commerce and Industry (FICCI) appointed which 1992-batch Indian Railway Personnel Service (IRPS) officer as its Secretary General?",
          options: [
            "Anant Swarup",
            "Srikanth Velamakanni",
            "Ashok Lahiri",
            "Saurabh Vijay"
          ],
          correct: 0,
          explanation: "Anant Swarup, a 1992-batch IRPS officer, was appointed Secretary General of FICCI."
        },
        {
          question: "NASSCOM, the apex body representing India's IT & BPM industry, appointed which tech leader and co-founder of Fractal Analytics as its Chairman?",
          options: [
            "Anant Swarup",
            "Srikanth Velamakanni",
            "Shashi Shekhar Vempati",
            "Prasoon Joshi"
          ],
          correct: 1,
          explanation: "Srikanth Velamakanni, co-founder of Fractal Analytics, was appointed Chairman of NASSCOM."
        },
        {
          question: "Olympic medallist P. V. Sindhu achieved a rare milestone in global sports governance by being elected as the Chair of the Athletes' Commission of which international sports body?",
          options: [
            "International Olympic Committee",
            "Badminton World Federation (BWF)",
            "International Table Tennis Federation",
            "South Asian Sports Federation"
          ],
          correct: 1,
          explanation: "P. V. Sindhu was elected Chair of the Athletes' Commission of the Badminton World Federation (BWF), becoming a voting member of the BWF Council."
        },
        {
          question: "Who was appointed as the interim CEO of the World Economic Forum following the resignation of Børge Brende?",
          options: [
            "Klaus Schwab",
            "Alois Zwinggi",
            "Ajay Banga",
            "Kristalina Georgieva"
          ],
          correct: 1,
          explanation: "Alois Zwinggi, long-time Managing Director and Head of Corporate Affairs at WEF, was appointed interim CEO following Børge Brende's resignation."
        },
        {
          question: "Who assumed charge as the new Chairperson of the National Commission for Backwards Classes (NCBC) in March 2026?",
          options: [
            "Hansraj Gangaram Ahir",
            "Bhagwan Lal Sahni",
            "Sadhvi Niranjan Jyoti",
            "Kiran Umesh Mahalle"
          ],
          correct: 2,
          explanation: "Former Union Minister Sadhvi Niranjan Jyoti assumed charge as Chairperson of the NCBC on 18 March 2026."
        },
        {
          question: "Who recently became the first female member from Iran to be elected to the International Olympic Committee (IOC)?",
          options: [
            "Kimia Alizadeh",
            "Soraya Aghaei Hajiagha",
            "Neda Shahsavari",
            "Elaheh Ahmadi"
          ],
          correct: 1,
          explanation: "Soraya Aghaei Hajiagha was elected during the 145th IOC Session in Milan, becoming the first female member from Iran and the youngest sitting IOC member."
        },
        {
          question: "In the presidential election conducted through the Union Parliament, military chief Min Aung Hlaing was elected as the President of which nation?",
          options: [
            "Djibouti",
            "Mongolia",
            "Myanmar",
            "Cambodia"
          ],
          correct: 2,
          explanation: "Min Aung Hlaing was elected President of Myanmar after securing 429 out of 584 votes in the Union Parliament."
        },
        {
          question: "Who was appointed as the new Prime Minister of Yemen by the Presidential Leadership Council?",
          options: [
            "Salem bin Braik",
            "Shaea Muhssin Mohammed Al-Zindani",
            "Maeen Abdulmalik Saeed",
            "Rashad al-Alimi"
          ],
          correct: 1,
          explanation: "Shaea Muhssin Mohammed Al-Zindani was appointed as the new Prime Minister of Yemen, succeeding Salem bin Braik."
        },
        {
          question: "Ali al-Zaidi officially assumed office as the new Prime Minister of which country in May 2026?",
          options: [
            "Oman",
            "Iraq",
            "Uganda",
            "Bangladesh"
          ],
          correct: 1,
          explanation: "Ali al-Zaidi officially assumed office as Prime Minister of Iraq in May 2026, succeeding Mohammed Shia al-Sudani."
        },
        {
          question: "Who was re-elected as the President of Uganda for a seventh term in 2026?",
          options: [
            "Bobi Wine",
            "Paul Kagame",
            "Yoweri Museveni",
            "William Ruto"
          ],
          correct: 2,
          explanation: "Yoweri Museveni was re-elected President of Uganda for a seventh term with a 71.65% vote share, having been in power since 1986."
        },
        {
          question: "Following the 2025 Gen Z protests, who became Nepal's next Prime Minister from the Rastriya Swatantra Party (RSP)?",
          options: [
            "K. P. Sharma Oli",
            "Pushpa Kamal Dahal",
            "Sher Bahadur Deuba",
            "Balendra 'Balen' Shah"
          ],
          correct: 3,
          explanation: "Balendra 'Balen' Shah, representing the Rastriya Swatantra Party (RSP), became Nepal's Prime Minister following the Gen Z protests."
        },
        {
          question: "Who took oath as the 25th Chief Minister of Karnataka?",
          options: [
            "Siddaramaiah",
            "D. K. Shivakumar",
            "G. Parameshwara",
            "Thaawarchand Gehlot"
          ],
          correct: 1,
          explanation: "D. K. Shivakumar took oath as the 25th CM of Karnataka administered by Governor Thaawarchand Gehlot, with G. Parameshwara as Deputy CM."
        },
        {
          question: "Who took charge as the new Union Minister of Education in July 2026, replacing Dharmendra Pradhan?",
          options: [
            "Anurag Thakur",
            "Smriti Irani",
            "Pralhad Joshi",
            "Ashwini Vaishnaw"
          ],
          correct: 2,
          explanation: "Pralhad Joshi took charge of the Union Ministry of Education on 26 July 2026 after Dharmendra Pradhan's resignation."
        },
        {
          question: "Who was appointed as the new Chief Executive Officer (CEO) of NITI Aayog for a 2-year tenure?",
          options: [
            "B.V.R. Subrahmanyam",
            "Anurag Jain",
            "Amitabh Kant",
            "Parameswaran Iyer"
          ],
          correct: 1,
          explanation: "Anurag Jain, former Chief Secretary of Madhya Pradesh, was appointed CEO of NITI Aayog for a two-year tenure."
        },
        {
          question: "Andy Burnham was officially sworn in as the 7th Prime Minister of which country in a decade?",
          options: [
            "Australia",
            "Canada",
            "United Kingdom",
            "New Zealand"
          ],
          correct: 2,
          explanation: "Labour Party leader Andy Burnham became the Prime Minister of the United Kingdom, succeeding Keir Starmer."
        },
        {
          question: "Diplomat Sanjeev Jain has been appointed as India's new Ambassador to which country?",
          options: [
            "North Korea",
            "Cabo Verde",
            "South Korea",
            "Japan"
          ],
          correct: 0,
          explanation: "Sanjeev Jain, previously Ambassador to Cabo Verde, was appointed as India's Ambassador to North Korea."
        },
        {
          question: "The government granted a one-year extension to which official, extending their tenure as Foreign Secretary till 14th July 2027?",
          options: [
            "Vinay Mohan Kwatra",
            "Harsh Vardhan Shringla",
            "S. Jaishankar",
            "Vikram Misri"
          ],
          correct: 3,
          explanation: "Vikram Misri was granted a one-year extension as Foreign Secretary, extending his tenure until 14 July 2027."
        },
        {
          question: "Who was appointed as the new Executive Director (ED) of the Reserve Bank of India, effective from July 2026?",
          options: [
            "M. Rajeshwar Rao",
            "T. Rabi Sankar",
            "Ravi Shankar",
            "Swaminathan J"
          ],
          correct: 2,
          explanation: "Ravi Shankar, formerly Adviser-in-Charge of DSIM, was appointed Executive Director of the Reserve Bank of India."
        },
        {
          question: "Air Marshal Ashutosh Dixit assumed charge as the Vice Chief of the Air Staff (VCAS). Whom did he succeed in this role?",
          options: [
            "Air Marshal Amar Preet Singh",
            "Air Marshal Nagesh Kapoor",
            "Air Marshal Vivek Ram Chaudhari",
            "Air Marshal Sandeep Singh"
          ],
          correct: 1,
          explanation: "Air Marshal Ashutosh Dixit took over as VCAS from Air Marshal Nagesh Kapoor upon the latter's retirement."
        },
        {
          question: "Who was re-appointed as the Chairman of the Central Board of Direct Taxes (CBDT) on a contract basis till 31 December 2026?",
          options: [
            "Nitin Gupta",
            "J. B. Mohapatra",
            "Ravi Agrawal",
            "P. C. Mody"
          ],
          correct: 2,
          explanation: "Ravi Agrawal was re-appointed as Chairman of the CBDT on an extended six-month contract basis till 31 December 2026."
        }
      ]
    },
    {
      title: "Set 3",
      questions: [
        {
          question: "General Dhiraj Seth officially took charge as the 31st Chief of the Army Staff (COAS). Whom did he succeed in this position?",
          options: [
            "General Manoj Pande",
            "General Upendra Dwivedi",
            "General M. M. Naravane",
            "General Bipin Rawat"
          ],
          correct: 1,
          explanation: "General Dhiraj Seth took charge as the 31st COAS, succeeding General Upendra Dwivedi following his superannuation."
        },
        {
          question: "Who was appointed as the head coach of the Senior Men's Indian National Football Team by the AIFF?",
          options: [
            "Igor Stimac",
            "Stephen Constantine",
            "Khalid Jamil",
            "Bhaichung Bhutia"
          ],
          correct: 2,
          explanation: "The AIFF Executive Committee appointed Khalid Jamil as the head coach of the Senior Men's Indian National Football Team."
        },
        {
          question: "Who became the first female Director General of the Railway Protection Force (RPF) in its 143-year history?",
          options: [
            "Nina Singh",
            "Rashmi Shukla",
            "Kala Ramachandran",
            "Sonali Mishra"
          ],
          correct: 3,
          explanation: "Sonali Mishra (IPS, 1993 batch, MP Cadre) made history by becoming the first female Director General of the RPF."
        },
        {
          question: "Who was appointed as India's Deputy National Security Advisor (Deputy NSA) to oversee internal security affairs?",
          options: [
            "Dattatray Padsalgikar",
            "Pankaj Kumar Singh",
            "Anish Dayal Singh",
            "Sheel Vardhan Singh"
          ],
          correct: 2,
          explanation: "Former CRPF and ITBP DG Anish Dayal Singh was appointed Deputy NSA specifically mandated to handle internal security affairs."
        },
        {
          question: "Which former RBI Governor was appointed as the Executive Director (ED) at the International Monetary Fund (IMF) for a three-year term?",
          options: [
            "Raghuram Rajan",
            "Urjit Patel",
            "D. Subbarao",
            "C. Rangarajan"
          ],
          correct: 1,
          explanation: "Former RBI Governor Urjit Patel was appointed Executive Director at the IMF for a three-year term, approved by the ACC."
        },
        {
          question: "In August 2026, who was elected as the President of Bangladesh in its first contested presidential election since 1991?",
          options: [
            "Sheikh Hasina",
            "Tarique Rahman",
            "Mirza Fakhrul Islam Alamgir",
            "Muhammad Yunus"
          ],
          correct: 2,
          explanation: "BNP leader Mirza Fakhrul Islam Alamgir was elected President of Bangladesh under Article 48 of the Constitution, securing 255 votes in Parliament."
        },
        {
          question: "Who was appointed as the Governor of Maharashtra in the recent gubernatorial reshuffle by President Droupadi Murmu?",
          options: [
            "Shiv Pratap Shukla",
            "Jishnu Dev Varma",
            "Nand Kishore Yadav",
            "Syed Ata Hasnain"
          ],
          correct: 1,
          explanation: "President Murmu appointed Jishnu Dev Varma as the Governor of Maharashtra during the gubernatorial appointments announced alongside other states."
        },
        {
          question: "Who was appointed as the Governor of Nagaland in the 2026 gubernatorial reshuffle?",
          options: [
            "Nand Kishore Yadav",
            "Jishnu Dev Varma",
            "La Ganesan",
            "Shiv Pratap Shukla"
          ],
          correct: 0,
          explanation: "Nand Kishore Yadav was appointed as the Governor of Nagaland following the presidential appointments."
        },
        {
          question: "Who was appointed as the Governor of Bihar by President Droupadi Murmu?",
          options: [
            "Syed Ata Hasnain",
            "Shiv Pratap Shukla",
            "Jishnu Dev Varma",
            "Nand Kishore Yadav"
          ],
          correct: 0,
          explanation: "Syed Ata Hasnain was appointed as the Governor of Bihar, administering the oath of office to CM Samrat Choudhary."
        },
        {
          question: "Who took oath as the Deputy Chief Minister of Karnataka alongside Chief Minister D. K. Shivakumar?",
          options: [
            "G. Parameshwara",
            "Siddaramaiah",
            "B. S. Yediyurappa",
            "Thaawarchand Gehlot"
          ],
          correct: 0,
          explanation: "G. Parameshwara assumed charge as the Deputy Chief Minister of Karnataka alongside Chief Minister D. K. Shivakumar."
        },
        {
          question: "Who took oath as Deputy Chief Ministers of Bihar in the new Samrat Choudhary-led government?",
          options: [
            "Vijay Kumar Chaudhary & Bijendra Prasad Yadav",
            "Tejashwi Yadav & Vijay Kumar Sinha",
            "Tarkishore Prasad & Renu Devi",
            "Samrat Choudhary & Nitish Kumar"
          ],
          correct: 0,
          explanation: "Vijay Kumar Chaudhary and Bijendra Prasad Yadav assumed charge as Deputy Chief Ministers in the Samrat Choudhary-led Bihar government."
        },
        {
          question: "Who was appointed as the Chief Operating Officer (COO) of the IndiaAI Mission?",
          options: [
            "Sudeep Shrivastava",
            "Saurabh Vijay",
            "Abhishek Singh",
            "Amitesh Kumar Sinha"
          ],
          correct: 0,
          explanation: "Sudeep Shrivastava was appointed as COO of the IndiaAI Mission, while Saurabh Vijay took charge as CEO."
        },
        {
          question: "Who assumed charge as a Member of the National Commission for Backward Classes (NCBC) alongside Chairperson Sadhvi Niranjan Jyoti?",
          options: [
            "Kiran Umesh Mahalle",
            "Bhagwan Lal Sahni",
            "Hansraj Gangaram Ahir",
            "Praveen Vashista"
          ],
          correct: 0,
          explanation: "Kiran Umesh Mahalle assumed charge as a Member of the National Commission for Backward Classes (NCBC)."
        },
        {
          question: "Who was appointed as the Chief Executive Officer (CEO) of the South Asian Weightlifting Federation (SAWF)?",
          options: [
            "Sabina Yadav",
            "Sahdev Yadav",
            "Saurabh Vijay",
            "Jyoti Vij"
          ],
          correct: 0,
          explanation: "Sabina Yadav was appointed CEO of the South Asian Weightlifting Federation, while Sahdev Yadav was elected President unopposed."
        },
        {
          question: "Who was appointed as the 4th Lieutenant Governor of the Union Territory of Ladakh in March 2026?",
          options: [
            "Vinai Kumar Saxena",
            "B. D. Mishra",
            "R. K. Mathur",
            "Manoj Sinha"
          ],
          correct: 0,
          explanation: "Vinai Kumar Saxena assumed office as the 4th Lieutenant Governor of the Union Territory of Ladakh in March 2026."
        },
        {
          question: "Who serves as the Registrar General and Census Commissioner of India for Census 2027?",
          options: [
            "Mritunjay Kumar Narayan",
            "C. Chandramouli",
            "Sailesh",
            "Vivek Joshi"
          ],
          correct: 0,
          explanation: "Mritunjay Kumar Narayan is the Registrar General and Census Commissioner of India overseeing the digital Census 2027 operations."
        },
        {
          question: "Who was re-elected unopposed for a third consecutive term as the Deputy Chairman of the Rajya Sabha in April 2026?",
          options: [
            "Harivansh Narayan Singh",
            "C. P. Radhakrishnan",
            "Om Birla",
            "Jagdeep Dhankhar"
          ],
          correct: 0,
          explanation: "Harivansh Narayan Singh was elected unopposed for a historic third consecutive term, becoming the first nominated member to serve as RS Deputy Chairman."
        },
        {
          question: "Who was elected as the Chairman of the 28th Commonwealth Speakers and Presiding Officers Conference (CSPOC) in New Delhi?",
          options: [
            "Om Birla",
            "Harivansh Narayan Singh",
            "C. P. Radhakrishnan",
            "Sumitra Mahajan"
          ],
          correct: 0,
          explanation: "Lok Sabha Speaker Om Birla chaired the 28th CSPOC held in New Delhi focusing on Artificial Intelligence in Parliament."
        },
        {
          question: "Who administered the oath of office to 10 newly elected Rajya Sabha members in June 2026 as the Chairman of the Rajya Sabha?",
          options: [
            "C. P. Radhakrishnan",
            "Jagdeep Dhankhar",
            "Harivansh Narayan Singh",
            "Surya Kant"
          ],
          correct: 0,
          explanation: "Vice President and Rajya Sabha Chairman C. P. Radhakrishnan administered the oath of office to 10 Rajya Sabha members in June 2026."
        },
        {
          question: "Who assumed office as the Chief Justice of India, leading judicial reforms towards paperless courts?",
          options: [
            "Surya Kant",
            "D. Y. Chandrachud",
            "Sanjiv Khanna",
            "B. R. Gavai"
          ],
          correct: 0,
          explanation: "Chief Justice of India Surya Kant inaugurated and commended Sikkim's fully paperless judicial initiative."
        },
        {
          question: "Who took charge as Chairman of the selection committee for the National Sports Awards 2025?",
          options: [
            "Justice Arun Kumar Mishra",
            "Justice A. K. Sikri",
            "Justice Ranjan Gogoi",
            "Justice N. V. Ramana"
          ],
          correct: 0,
          explanation: "Retired Supreme Court judge Justice Arun Kumar Mishra chaired the selection committee for the National Sports Awards 2025."
        },
        {
          question: "Who serves as the Director of the Indian Institute of Astrophysics (IIA), Bengaluru, honoured with the COSPAR Vikram Sarabhai Medal 2026?",
          options: [
            "Annapurni Subramaniam",
            "Tessy Thomas",
            "Ritu Karidhal",
            "Nandini Harinath"
          ],
          correct: 0,
          explanation: "Annapurni Subramaniam serves as the Director of the Indian Institute of Astrophysics, Bengaluru."
        },
        {
          question: "Who represents Prasar Bharati as Chief Executive Officer (CEO) and led the delegation at the AIBD Executive Board elections?",
          options: [
            "Gaurav Dwivedi",
            "Prasoon Joshi",
            "Shashi Shekhar Vempati",
            "Saurabh Vijay"
          ],
          correct: 0,
          explanation: "Gaurav Dwivedi serves as the Chief Executive Officer of Prasar Bharati and represented India at the 23rd AIBD General Conference."
        },
        {
          question: "Who heads the Narcotics Control Bureau (NCB) and led the Indian delegation at the BRICS Heads of Anti-Drug Agencies Meeting 2026?",
          options: [
            "Anurag Garg",
            "Rakesh Aggarwal",
            "Mahesh Dixit",
            "Praveen Vashista"
          ],
          correct: 0,
          explanation: "Anurag Garg headed the Indian delegation representing the Narcotics Control Bureau (NCB) at the BRICS Anti-Drug Agencies meeting in Guwahati."
        },
        {
          question: "Who serves as the Chairman of the Indian Space Research Organisation (ISRO) guiding the Gaganyaan mission timeline?",
          options: [
            "Dr. V. Narayanan",
            "S. Somanath",
            "K. Sivan",
            "A. S. Kiran Kumar"
          ],
          correct: 0,
          explanation: "Dr. V. Narayanan serves as the Chairman of ISRO, overseeing flagship programs including the Chandrayaan and Gaganyaan human spaceflight initiatives."
        }
      ]
    }
  ]
};
QB.register("appt", SUBJECT_APPT);