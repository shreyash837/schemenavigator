
//disability logic


let extraQuestionSet={
    bTech:`<div class="extra-section">

  <p class="section-label">Additional Details</p>

  <!-- 1. Admission through government quota -->
  <div class="field">
    <label>Admission through government quota / CAP?</label>
    <p class="hint">CAP (Centralized Admission Process) means your college seat was allotted by the government, not through a direct/management quota.</p>
    <div class="pill-group">
      <div><input type="radio" name="gov_quota" id="quota-yes" value="yes" required><label for="quota-yes">Yes</label></div>
      <div><input type="radio" name="gov_quota" id="quota-no"  value="no"  required><label for="quota-no" >No</label></div>
    </div>
  </div>

  <!-- 2. Distance from hometown to college -->
  <div class="field">
    <label for="distance">Distance from hometown to college (km)</label>
    <p class="hint">Enter the road distance between your permanent home address and your college. Many schemes give extra benefits if you study far from home (usually 50 km+).</p>
    <input type="number" id="distance" name="distance_km" placeholder="e.g. 120" min="0" required />
  </div>

  <!-- 3. Accommodation type -->
  <div class="field">
    <label for="accommodation">Where are you currently staying?</label>
    <p class="hint">
      <strong>Private PG / Hostel</strong> — paying rent to a private owner or institution. &nbsp;|&nbsp;
      <strong>Government Hostel</strong> — staying in a hostel run by the state government or your college. &nbsp;|&nbsp;
      <strong>Home</strong> — commuting daily from your own house.
    </p>
    <div class="select-wrap">
      <select id="accommodation" name="accommodation" required>
        <option value="" disabled selected>Select accommodation</option>
        <option value="private_pg">Private PG</option>
        <option value="private_hostel">Private Hostel</option>
        <option value="gov_hostel">Government Hostel</option>
        <option value="home">Living at Home</option>
      </select>
    </div>
  </div>

  <!-- 4. Other scholarship -->
  <div class="field">
    <label>Currently benefiting from any other government scholarship?</label>
    <p class="hint">If you already receive a scheme like EBC, Mahadbt, or any central/state scholarship, select Yes. Some schemes cannot be combined with others.</p>
    <div class="pill-group">
      <div><input type="radio" name="other_scholarship" id="sch-yes" value="yes" required><label for="sch-yes">Yes</label></div>
      <div><input type="radio" name="other_scholarship" id="sch-no"  value="no"  required><label for="sch-no" >No</label></div>
    </div>
  </div>

  <!-- 5. Parent occupation -->
  <div class="field">
    <label for="occupation">Parent / Guardian occupation</label>
    <p class="hint">What does your parent or guardian do for a living? Several government schemes are specifically designed for children of farmers, construction workers, and daily-wage labourers — so this helps us find the right match.</p>
    <div class="select-wrap">
      <select id="occupation" name="parent_occupation" required>
        <option value="" disabled selected>Select occupation</option>
        <option value="farmer">Farmer</option>
        <option value="construction_worker">Construction Worker</option>
        <option value="daily_wage">Daily Wage Labourer</option>
        <option value="govt_employee">Government Employee</option>
        <option value="private_employee">Private Employee</option>
        <option value="self_employed">Self Employed / Business</option>
        <option value="other">Other</option>
      </select>
    </div>
  </div>

  <!-- 6. Academic gap -->
  <div class="field">
    <label>Academic gap (if any)</label>
    <p class="hint">Did you take a break between finishing school / 12th and starting your current course? A gap year means you did not enroll in any college during that period. Some schemes restrict eligibility if there is a gap of more than 1–2 years.</p>
    <div class="pill-group three">
      <div><input type="radio" name="gap" id="gap-none" value="none" required><label for="gap-none">No gap</label></div>
      <div><input type="radio" name="gap" id="gap-1"    value="1year" required><label for="gap-1">1 year</label></div>
      <div><input type="radio" name="gap" id="gap-2"    value="2year" required><label for="gap-2">2 years</label></div>
    </div>
  </div>

  <button type="submit">Find my schemes →</button>
</div>`,
 mba: `
<div class="extra-section">

  <p class="section-label">Additional Details</p>

  <!-- 1. Government Quota -->
  <div class="field">
    <label>Admission through Government / CAP Quota?</label>
    <p class="hint">
      Many MBA scholarships are available only for students admitted through CAP or Government quota seats.
    </p>
    <div class="pill-group">
      <div>
        <input type="radio" name="gov_quota" id="mba-quota-yes" value="yes" required>
        <label for="mba-quota-yes">Yes</label>
      </div>

      <div>
        <input type="radio" name="gov_quota" id="mba-quota-no" value="no" required>
        <label for="mba-quota-no">No</label>
      </div>
    </div>
  </div>

  <!-- 2. Distance -->
  <div class="field">
    <label for="mba-distance">Distance from hometown to college (km)</label>
    <p class="hint">
      Some hostel and maintenance allowance schemes require students to study away from home.
    </p>

    <input
      type="number"
      id="mba-distance"
      name="distance_km"
      min="0"
      placeholder="e.g. 50"
      required
    />
  </div>

  <!-- 3. Accommodation -->
  <div class="field">
  <label>Are you staying in a hostel/PG for your studies?</label>

  <p class="hint">
    Select "Yes" if you live in any hostel or PG away from your permanent home.
    Select "No" if you commute daily from home (Day Scholar).
  </p>

  <div class="pill-group">
    <div>
      <input type="radio" name="accommodation" id="hostel-yes"
             value="private_pg" required>
      <label for="hostel-yes">Hostel / PG</label>
    </div>

    <div>
      <input type="radio" name="accommodation" id="hostel-no"
             value="home" required>
      <label for="hostel-no">Day Scholar</label>
    </div>
  </div>
</div>

  <!-- 4. Parent Occupation -->
  <div class="field">
    <label for="mba-occupation">Parent / Guardian Occupation</label>

    <div class="select-wrap">
      <select id="mba-occupation" name="parent_occupation" required>
        <option value="" disabled selected>Select occupation</option>
        <option value="farmer">Farmer</option>
        <option value="construction_worker">Construction Worker</option>
        <option value="daily_wage">Daily Wage Labourer</option>
        <option value="govt_employee">Government Employee</option>
        <option value="private_employee">Private Employee</option>
        <option value="self_employed">Business / Self Employed</option>
        <option value="other">Unemployedr</option>
      </select>
    </div>
  </div>

  <!-- 5. Academic Gap -->
  <div class="field">
    <label>Academic Gap Before MBA?</label>

    <div class="pill-group">
      <div>
        <input type="radio" name="gap" id="mba-gap-no" value="no" required>
        <label for="mba-gap-no">No</label>
      </div>

      <div>
        <input type="radio" name="gap" id="mba-gap-yes" value="yes" required>
        <label for="mba-gap-yes">Yes</label>
      </div>
    </div>
  </div>

  <!-- 6. Minority -->
  <div class="field">
    <label>Do you belong to a notified Minority Community?</label>

    <div class="pill-group">
      <div>
        <input type="radio" name="minority" id="minority-yes" value="yes" required>
        <label for="minority-yes">Yes</label>
      </div>

      <div>
        <input type="radio" name="minority" id="minority-no" value="no" required>
        <label for="minority-no">No</label>
      </div>
    </div>
  </div>

  <!-- 7. Regular Student -->
  <div class="field">
    <label>Are you studying as a Regular Full-Time Student?</label>

    <div class="pill-group">
      <div>
        <input type="radio" name="regular" id="regular-yes" value="yes" required>
        <label for="regular-yes">Yes</label>
      </div>

      <div>
        <input type="radio" name="regular" id="regular-no" value="no" required>
        <label for="regular-no">No</label>
      </div>
    </div>
  </div>

  <!-- 8. Backlog -->
  <div class="field">
    <label>Do you currently have any active backlog / ATKT?</label>

    <div class="pill-group">
      <div>
        <input type="radio" name="backlog" id="backlog-no" value="no" required>
        <label for="backlog-no">No</label>
      </div>

      <div>
        <input type="radio" name="backlog" id="backlog-yes" value="yes" required>
        <label for="backlog-yes">Yes</label>
      </div>
    </div>
  </div>

  <!-- 9. Graduation Percentage -->
  <div class="field">
    <label for="mba-marks">Graduation Percentage</label>

    <input
      type="number"
      id="mba-marks"
      name="min_marks"
      min="0"
      max="100"
      step="0.01"
      placeholder="e.g. 72"
      required
    />
  </div>

  <!-- 10. Attendance -->
  <div class="field">
    <label for="mba-attendance">Current Attendance (%)</label>

    <input
      type="number"
      id="mba-attendance"
      name="min_attendance"
      min="0"
      max="100"
      placeholder="e.g. 85"
      required
    />
  </div>

  <button type="submit">Find my schemes →</button>

</div>
`
};

  let userData = {
      gender: 'male',
      category: 'open',
      family_income: '25000',
      state: 'maharashtra',
      qualification: 'btech',
      accommodation: 'private_pg',
      disability_percentage: '',
      distance_km: '90',
      gap: 'none',
      gov_quota: 'yes',
      has_disability: 'no',
      other_scholarship: 'no',
      parent_occupation: 'construction_worker'
    };

let askExtraQuestionButton=document.getElementById("askExtraQuestions");
let schemeForm=document.getElementById("findSchemeForm")
askExtraQuestionButton.addEventListener('click',(e)=>{
    e.preventDefault()
if(schemeForm.education.value == 'btech'){
    let div=document.createElement('div');
    div.innerHTML=extraQuestionSet.bTech;
    schemeForm.appendChild(div)
    
}
if(schemeForm.education.value == 'mba'){
  let div=document.createElement('div');
    div.innerHTML=extraQuestionSet.mba;
    schemeForm.appendChild(div)
}

})
schemeForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  let income = Number(document.getElementById("income").value);
    let disabilityYes = document.getElementById("dis-yes").checked;
    let disabilityPct = document.getElementById("disability_pct").value;

    // Income validation
    if(income < 0){
        e.preventDefault();
        alert("Family income cannot be negative.");
        return;
    }

    // Check disability percentage if disability = yes
    if(disabilityYes){
        if(disabilityPct === ""){
            e.preventDefault();
            alert("Please enter disability percentage.");
            return;
        }

        if(disabilityPct < 1 || disabilityPct > 100){
            e.preventDefault();
            alert("Disability percentage must be between 1 and 100.");
            return;
        }
    }

    // Extra safety check
    let requiredFields = document.querySelectorAll("[required]");

    for(let field of requiredFields){
        if(!field.checkValidity()){
            e.preventDefault();
            alert("Please fill all required fields correctly.");
            field.focus();
            return;
        }
    }

  const formData = new FormData(schemeForm);
  const data = Object.fromEntries(formData.entries());
  userData=data;
  console.log(userData);
  

  try {
    const res = await fetch("/schemeForm/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if(!res.ok){
      alert('somthing went wrong server error')
    }
    const result = await res.json();

    let schems=result.schems;
     let schemeContaner=document.querySelector('.userSchemeContainer');
     schemeContaner.innerHTML='<h1 id="youEligibleScheme">You are eligible for</h1>'
    
    schems.forEach((ele,ind)=>{
      // ele.scheme_name/
      let ptag=document.createElement('p');
      ptag.classList.add('userScheme');
      ptag.innerText=ele.scheme_name;
      ptag.dataset.schemeid=ele.scheme_id;
      ptag.addEventListener('click',redirecter)
      
     schemeContaner.appendChild(ptag)
     
      
    });
    let contaner=document.querySelector('.userSchemeWrapper');
    contaner.style.display='flex'
    window.location.href='/#schemes'
  } catch (err) {
    console.log(err);
  }
});

function redirecter(eve){
  let schemeId=eve.target.dataset.schemeid;
  window.location.href=`/getSchemeDetailJson/${schemeId}`;
}

let findSchemeButton=document.querySelector('.primary-btn');
findSchemeButton.addEventListener('click',(e)=>{
  window.location.href='/#form'
})

let schemeLI=document.querySelector('#formSearch')
schemeLI.style.cursor='pointer'
console.log(schemeLI);

schemeLI.addEventListener('click',(e)=>{
  window.location.href='/#form'
})

// ---- Ye apne actual form data se replace karo ----
  

    // ---- Ye apne actual scheme div se dynamically lena ----
    function getSchemes() {
      const schemes = document.querySelectorAll('.userScheme');
      if (schemes.length > 0) {
        return Array.from(schemes).map(s => s.textContent.trim()).join(', ');
      }
      return 'EBC Scholarship, SC/ST Post Matric'; // fallback for demo
    }

    function findCafe() {
      const btn = document.getElementById('findCafeBtn');
      const msg = document.getElementById('locatingMsg');
      const section = document.getElementById('cafeSection');

      btn.disabled = true;
      msg.style.display = 'flex';

      // Location permission mangna — coordinates hardcoded hain
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          () => showMap(msg, section),
          () => showMap(msg, section) // deny karo tab bhi map dikhao
        );
      } else {
        showMap(msg, section);
      }
    }

    function showMap(msg, section) {
      setTimeout(() => {
        msg.style.display = 'none';
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth' });
      }, 1500);
    }

    function sendWhatsApp(lang) {
      const phone = document.getElementById('cafePhone').value.trim().replace(/\D/g, '');

      if (!phone || phone.length < 10) {
        alert('Please enter a valid phone number');
        return;
      }

      const schemes = getSchemes();
      let message = '';

      if (lang === 'en') {
        message =
          `Hello, I need help applying for government scholarships at a cyber cafe.\n\n` +
          `*My Details:*\n` +
          `- Gender: ${userData.gender}\n` +
          `- Category: ${userData.category}\n` +
          `- State: ${userData.state}\n` +
          `- Qualification: ${userData.qualification}\n` +
          `- Family Income: ₹${userData.family_income}/year\n` +
          `- Parent Occupation: ${userData.parent_occupation}\n` +
          `- Government Quota: ${userData.gov_quota}\n\n` +
          `*Eligible Schemes:*\n${schemes}\n\n` +
          `Please assist me with the application process.`;
      } else {
       message =
  `hii sir,\n\n ` +
  ` मला सरकारी शिष्यवृत्तीसाठी ऑनलाइन अर्ज करायचा आहे,  तुमच्या सायबर कॅफेमध्ये येऊन .\n\n` +
  `*माझी माहिती:*\n` +
  `- Gender: ${userData.gender}\n` +
  `- प्रवर्ग: ${userData.category}\n` +
  `- राज्य: ${userData.state}\n` +
  `- शिक्षण: ${userData.qualification}\n` +
  `- कौटुंबिक उत्पन्न: ₹${userData.family_income}/वर्ष\n` +
  `- पालकाचा व्यवसाय: ${userData.parent_occupation}\n` +
  `- सरकारी कोटा: ${userData.gov_quota === 'yes' ? 'होय' : 'नाही'}\n\n` +
  `*मला पात्र असलेल्या योजना:*\n${schemes}\n\n` +
  `तुम्ही जेव्हा मोकळे असाल तेव्हा मला call किंवा message करा — मी सर्व आवश्यक documents घेऊन cafe मध्ये येतो.\n\n` +
  `धन्यवाद 🙏`;
      }

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }