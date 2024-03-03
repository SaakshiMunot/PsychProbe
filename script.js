// var anxeity_score = 0;
// var bipolar_score = 0;
// var depression_score = 0;
// var schizophrenia_score = 0;
// var ptsd_score = 0;
// var eatingDisorder_score = 0;
// var ocd_score = 0;
// var bpd_score = 0;
// var none_score = 0;
// var too_many = 0;

// const disorders = [anxeity_score, bipolar_score, depression_score, schizophrenia_score, ptsd_score, eatingDisorder_score, ocd_score, bpd_score, none_score, too_many];

// var question_count = 0;

// var results = document.getElementById("result")

// var q1a1 = document.getElementById("q1a1");
// var q1a2 = document.getElementById("q1a2");
// var q1a3 = document.getElementById("q1a3");
// var q1a4 = document.getElementById("q1a4");

// var q2a1 = document.getElementById("q2a1");
// var q2a2 = document.getElementById("q2a2");
// var q2a3 = document.getElementById("q2a3");
// var q2a4 = document.getElementById("q2a4");

// var q3a1 = document.getElementById("q3a1");
// var q3a2 = document.getElementById("q3a2");
// var q3a3 = document.getElementById("q3a3");
// var q3a4 = document.getElementById("q3a4");

// var q4a1 = document.getElementById("q4a1");
// var q4a2 = document.getElementById("q4a2");
// var q4a3 = document.getElementById("q4a3");
// var q4a4 = document.getElementById("q4a4");

// var q5a1 = document.getElementById("q5a1");
// var q5a2 = document.getElementById("q5a2");
// var q5a3 = document.getElementById("q5a3");
// var q5a4 = document.getElementById("q5a4");

// var q6a1 = document.getElementById("q6a1");
// var q6a2 = document.getElementById("q6a2");
// var q6a3 = document.getElementById("q6a3");
// var q6a4 = document.getElementById("q6a4");

// var q7a1 = document.getElementById("q7a1");
// var q7a2 = document.getElementById("q7a2");
// var q7a3 = document.getElementById("q7a3");
// var q7a4 = document.getElementById("q7a4");

// var q8a1 = document.getElementById("q8a1");
// var q8a2 = document.getElementById("q8a2");
// var q8a3 = document.getElementById("q8a3");
// var q8a4 = document.getElementById("q8a4");

// var q9a1 = document.getElementById("q9a1");
// var q9a2 = document.getElementById("q9a2");
// var q9a3 = document.getElementById("q9a3");
// var q9a4 = document.getElementById("q9a4");


// q1a1.addEventListener("click", eatingDisorder)
// q1a1.addEventListener("click", bipolar)
// q1a3.addEventListener("click", none)
// q1a4.addEventListener("click", depression)

// q2a1.addEventListener("click", depression)
// q2a2.addEventListener("click", ocd)
// q2a3.addEventListener("click", anxeity)
// q2a4.addEventListener("click", none)

// q3a1.addEventListener("click", eatingDisorder)
// q3a2.addEventListener("click", bipolar)
// q3a3.addEventListener("click", ocd)
// q3a4.addEventListener("click", none)

// q4a1.addEventListener("click", schizophrenia)
// q4a2.addEventListener("click", bpd)
// q4a3.addEventListener("click", bipolar)
// q4a4.addEventListener("click", depression)

// q5a1.addEventListener("click", schizophrenia)
// q5a2.addEventListener("click", ptsd)
// q5a3.addEventListener("click", anxeity)
// q5a4.addEventListener("click", none)

// q6a1.addEventListener("click", anxeity)
// q6a2.addEventListener("click", schizophrenia)
// q6a3.addEventListener("click", bipolar)
// q6a4.addEventListener("click", eatingDisorder)

// q7a1.addEventListener("click", ptsd)
// q7a2.addEventListener("click", ocd)
// q7a3.addEventListener("click", bpd)
// q7a4.addEventListener("click", anxeity)

// q8a1.addEventListener("click", ptsd)
// q8a2.addEventListener("click", depression)
// q8a3.addEventListener("click", bpd)
// q8a4.addEventListener("click", schizophrenia)

// q9a1.addEventListener("click", eatingDisorder)
// q9a2.addEventListener("click", ptsd)
// q9a3.addEventListener("click", bpd)
// q9a4.addEventListener("click", ocd)

// function anxeity() {
//   console.log(hi);
//   anxeity_score += 1
//   question_count += 1

// }

// function bipolar() {
//   console.log(hi);
//   bipolar_score += 1
//   question_count += 1

// }

// function depression() {
//   console.log(hi);
//   depression_score += 1
//   question_count += 1

// }

// function schizophrenia() {
//   console.log(hi);
//   schizophrenia_score += 1
//   question_count += 1

// }

// function ptsd() {
//   console.log(hi);
//   ptsd_score += 1
//   question_count += 1

// }

// function eatingDisorder() {
//   console.log(hi);
//   eatingDisorder_score += 1
//   question_count += 1

// }

// function ocd() {
//   console.log(hi);
//   ocd_score += 1
//   question_count += 1

// }

// function bpd() {
//   console.log(hi);
//   bpd_score += 1
//   question_count += 1

// }

// function none() {
//   console.log(hi);
//   none_score += 1
//   question_count += 1

// }

// function tooMany() {
//   console.log(hi);
//   too_many += 1
//   question_count += 1

// }


// function findHighestDisorder(disorders) {
//   var length = disorders.length;

//   var highest = disorders[0]; // Assume the first element is the highest

//   for (var i = 1; i < length; i++) {
//     if (disorders[i] = highest) {
//       highest = disorders[i];
//     }
//   }

//   if (highest == anxeity_score) {
//     results.innerHTML = ("Anxiety disorders, including Generalized Anxiety Disorder (GAD), Panic Disorder, and Social Anxiety Disorder, extend beyond occasional worries, persisting and disrupting daily life. Women are diagnosed twice as often as men (23.4% vs. 14.3%, NIMH). GAD involves persistent anxiety and various symptoms, while Panic Disorder entails frequent, unexpected panic attacks. Social Anxiety Disorder features an intense fear of judgment, hindering daily activities. Recognizing and addressing these disorders is crucial, as they significantly impact individuals' well-being and require proper support. They can be challenging, but with proper treatment and support, they can be managed effectively.")
//   } else if (highest == bipolar_score) {
//     results.innerHTML = ("Bipolar disorder leads to drastic mood, energy, and activity shifts, hindering daily tasks. There are three types: I, II, and cyclothymic, all involving noticeable mood changes. Hormonal variations in women during menstruation, pregnancy, and menopause can influence bipolar severity. Women are equally likely as men to have bipolar I disorder but are more prone to bipolar II, experiencing rapid mood cycling. Women with bipolar disorder may face additional health issues, including alcohol problems, depression, thyroid disease, medication-induced obesity, and migraines. Bipolar I involves manic episodes lasting at least 7 days, often requiring medical attention, with potential depressive episodes and rapid cycling.");
//   } else if (highest == depression_score) {
//     results.innerHTML = ("Depression, marked by persistent sadness and loss of interest, profoundly influences thoughts, emotions, and daily functioning. Its origins lie in genetic, biological, environmental, and psychological factors. Treatment, combining therapy, medication, lifestyle adjustments, and social support, is crucial for managing its multifaceted nature. Women face a higher depression risk globally, being twice as likely as men to be diagnosed. Depression in women may lead to physical health issues and specific forms like premenstrual dysphoric disorder, perinatal depression during pregnancy or postpartum, and perimenopausal depression during menopausal transitions. Understanding and addressing these aspects are vital for comprehensive mental health care.");
//   } else if (highest == schizophrenia_score) {
//     results.innerHTML = ("Schizophrenia, a severe and chronic mental disorder, disrupts thinking, perception, emotions, and behavior, affecting reality perception. Typically emerging in late adolescence or early adulthood, it can impact various life aspects. While gender differences are minimal, women with schizophrenia may exhibit more overt hostility, physical activity, sexual delusions, and emotions than men. They also experience affective and paranoid symptoms, along with anxiety. Treatment involves lifelong use of antipsychotic medications and psychosocial therapy. Despite similarities between genders, there's a notable correlation between women with schizophrenia and a higher risk of suicide. Understanding these nuances is crucial for comprehensive care.");
//   } else if (highest == ptsd_score) {
//     results.innerHTML = ("Post-Traumatic Stress Disorder (PTSD), stemming from traumatic events, affects individuals irrespective of age, gender, or background. Women exhibit a higher likelihood of PTSD, with about 10% experiencing it compared to 4% of men in the U.S. This gender disparity is linked to increased exposure to traumas like sexual assault and partner violence. Cognitive processing therapy, exposure therapy, and medications are effective treatments. Notably, 1 in 3 U.S. women faces intimate partner violence, emphasizing the lasting psychological impact of such traumas. Recognizing these gender-specific aspects is crucial for addressing and treating PTSD comprehensively.");
//   } else if (highest == eatingDisorder_score) {
//     results.innerHTML = ("Eating disorders, serious and potentially fatal mental illnesses, affect around 20 million American women and 10 million men. Often tied to severe disturbances in eating behaviors, individuals may use food and dieting to cope with life stresses. Anorexia nervosa involves food avoidance and distorted self-perception, potentially leading to fatal outcomes. Bulimia nervosa features recurrent binge-eating episodes, followed by forced vomiting and excessive methods to control weight. Binge-eating disorder involves loss of control over eating, commonly observed in overweight individuals. Avoidant restrictive food intake disorder entails limitations on food amount or type, distinct from anorexia. Recognizing and addressing these disorders is crucial for comprehensive mental health care.");
//   } else if (highest == ocd_score) {
//     results.innerHTML = ("Obsessive-Compulsive Disorder (OCD) is a persistent mental health condition characterized by uncontrollable, recurring thoughts and repetitive behaviors. Those affected experience time-consuming symptoms causing distress and disrupting daily life. Women may find symptoms intensify during menstrual cycles, pregnancy, or postpartum due to hormonal changes. Obsessions include fear of germs, forgetting, losing control, or aggressive thoughts, while compulsions involve excessive cleaning, ordering, checking, counting, or repetitive rituals. Individuals may avoid triggers or resort to substance use for coping. Understanding these patterns is essential for effective support and management of OCD. Recognizing and addressing these disorders is crucial for comprehensive mental health care.");
//   } else if (highest == bpd_score) {
//     results.innerHTML = ("Borderline Personality Disorder (BPD) significantly disrupts emotional management, leading to increased impulsivity and strained relationships. Women are more susceptible, with 2 in 100 adults affected, predominantly young women. BPD often coexists with anxiety, eating, and substance use disorders. Symptoms include intense mood swings, self-uncertainty, extreme perceptions, rapidly changing interests, impulsive actions, unstable relationships, self-harm, and dissociative feelings. Recognizing these indicators is crucial for understanding and addressing the complex emotional challenges associated with BPD. Addressing these disorders is vital for comprehensive mental health care.");
//   } else if (highest == none_score) {
//     results.innerHTML = ("You are not diagnosed with any mental health disorders. However, it is important to recognize that mental health");
//   } else if (highest == too_many) {
//     results.innerHTML = ("If you're experiencing a range of mental health issues or challenges, it's normal to feel a mix of emotions. You may feel overwhelmed, anxious, sad, or frustrated. It's important to acknowledge and validate your feelings without judgment. Seeking support from friends, family, or mental health professionals can provide a helpful outlet. Remember that your emotions are valid, and reaching out for assistance is a sign of strength. If you're unsure about how you're feeling or need additional guidance, consider talking to a mental health professional who can provide personalized support and coping strategies.");
//   }
// }

// findHighestDisorder(disorders)


// var restart = document.getElementById("restart")
// restart.addEventListener("click", Restart)
// function Restart() {
//   anxeity_score = 0;
//   bipolar_score = 0;
//   depression_score = 0;
//   schizophrenia_score = 0;
//   ptsd_score = 0;
//   eatingDisorder_score = 0;
//   ocd_score = 0;
//   bpd_score = 0;
//   none_score = 0;
//   too_many = 0;
//   question_count = 0;
//   results.innerHTML = ("Your result is...")
// }


var results = document.getElementById("result");

// window.addEventListener("load", (event) => {
//   console.log("page is fully loaded");
//   var results = document.getElementById("result");
//   results.innerHTML("Your result is...")
// });

var anxeity_score = 0;
var bipolar_score = 0;
var depression_score = 0;
var schizophrenia_score = 0;
var ptsd_score = 0;
var eatingDisorder_score = 0;
var ocd_score = 0;
var bpd_score = 0;
var none_score = 0;
var too_many = 0;

var question_count = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");
var q9a4 = document.getElementById("q9a4");

q3a1.addEventListener("click", eatingDisorder)
q3a2.addEventListener("click", bipolar)
q3a3.addEventListener("click", ocd)
q3a4.addEventListener("click", none)

q4a1.addEventListener("click", schizophrenia)
q4a2.addEventListener("click", bpd)
q4a3.addEventListener("click", bipolar)
q4a4.addEventListener("click", depression)

q5a1.addEventListener("click", schizophrenia)
q5a2.addEventListener("click", ptsd)
q5a3.addEventListener("click", anxeity)
q5a4.addEventListener("click", none)

q6a1.addEventListener("click", anxeity)
q6a2.addEventListener("click", schizophrenia)
q6a3.addEventListener("click", bipolar)
q6a4.addEventListener("click", eatingDisorder)

q7a1.addEventListener("click", ptsd)
q7a2.addEventListener("click", ocd)
q7a3.addEventListener("click", bpd)
q7a4.addEventListener("click", anxeity)

q8a1.addEventListener("click", ptsd)
q8a2.addEventListener("click", depression)
q8a3.addEventListener("click", bpd)
q8a4.addEventListener("click", schizophrenia)

q9a1.addEventListener("click", eatingDisorder)
q9a2.addEventListener("click", ptsd)
q9a3.addEventListener("click", bpd)
q9a4.addEventListener("click", ocd)

// Add event listeners to the buttons
q1a1.addEventListener("click", eatingDisorder);
q1a2.addEventListener("click", bipolar);
q1a3.addEventListener("click", none);
q1a4.addEventListener("click", depression);

q2a1.addEventListener("click", depression);
q2a2.addEventListener("click", ocd);
q2a3.addEventListener("click", anxeity);
q2a4.addEventListener("click", none);

// Define the functions
function anxeity() {
  console.log("Anxiety button clicked");
  anxeity_score += 1;
  question_count += 1;
}

function bipolar() {
  console.log("Bipolar button clicked");
  bipolar_score += 1;
  question_count += 1;
}

function depression() {
  console.log("Depression button clicked");
  depression_score += 1;
  question_count += 1;
}

function schizophrenia() {
  console.log("Schizophrenia button clicked");
  schizophrenia_score += 1;
  question_count += 1;
}

function ptsd() {
  console.log("PTSD button clicked");
  ptsd_score += 1;
  question_count += 1;
}

function eatingDisorder() {
  console.log("Eating disorder button clicked");
  eatingDisorder_score += 1;
  question_count += 1;
}

function ocd() {
  console.log("OCD button clicked");
  ocd_score += 1;
  question_count += 1;
}

function bpd() {
  console.log("BPD button clicked");
  bpd_score += 1;
  question_count += 1;
}

function none() {
  console.log("None button clicked");
  none_score += 1;
  question_count += 1;
}

function tooMany() {
  console.log("Too many button clicked");
  too_many += 1;
  question_count += 1;
}

// Call the function to find the highest disorder

// findHighestDisorder();

function findHighestDisorder() {
  var disorders = [anxeity_score, bipolar_score, depression_score, schizophrenia_score, ptsd_score, eatingDisorder_score, ocd_score, bpd_score, none_score, too_many];
  var highest = Math.max(...disorders);
  var index = disorders.indexOf(highest);

  if (index === -1) {
    results.innerHTML = "No disorder detected.";
    return;
  }

  switch (index) {
    case 0:
      results.innerHTML = "Anxiety disorder detected.";
      break;
    case 1:
      results.innerHTML = "Bipolar disorder detected.";
      break;
    case 2:
      results.innerHTML = "Depression detected.";
      break;
    case 3:
      results.innerHTML = "Schizophrenia detected.";
      break;
    case 4:
      results.innerHTML = "PTSD detected.";
      break;
    case 5:
      results.innerHTML = "Eating disorder detected.";
      break;
    case 6:
      results.innerHTML = "OCD detected.";
      break;
    case 7:
      results.innerHTML = "BPD detected.";
      break;
    case 8:
      results.innerHTML = "No disorder detected.";
      break;
    case 9:
      results.innerHTML = "Too many disorders detected.";
      break;
    default:
      results.innerHTML = "Unknown result.";
      break;
  }
}

var submit = document.getElementById("submit");
submit.addEventListener("click", findHighestDisorder);

var restart = document.getElementById("restart");
restart.addEventListener("click", Restart);

function Restart() {
  anxeity_score = 0;
  bipolar_score = 0;
  depression_score = 0;
  schizophrenia_score = 0;
  ptsd_score = 0;
  eatingDisorder_score = 0;
  ocd_score = 0;
  bpd_score = 0;
  none_score = 0;
  too_many = 0;
  question_count = 0;
  results.innerHTML = "Your result is...";
}
