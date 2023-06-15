const Post = require('../models/posts');

Post.create([
  {
    title: 'HeartCode BLS Skills',
    instructor: 'Jane Doe',
    description: 'CPR (adult, children, & infant), 2 person CPR, AED, bag valve mask',
    length: '1-2 hours (at your home). We email you the online BLS course within 1 business day after your registration.',
    skills_testing: '1 Hour',
    price: '150',
    certification: 'American Heart Association© BLS certification. You will receive your BLS CPR eCard on the day of the class',
    date: '2023-12-03'
  },
  {
    title: 'HeartCode PALS Skills',
    instructor: 'Jane Doe',
    description: "HeartCode PALS is the AHA’s blended learning delivery method for the AHA’s PALS Course. HeartCode blended learning delivers quality resuscitation education regardless of where providers are located and gives them more control to complete the course at their own pace. Providers first complete the online portion of HeartCode PALS and then complete a hands-on skills session with an AHA PALS Instructor or a HeartCode compatible manikin",
    length: "Due to the adaptive technology used in this course, the completion time for the online portion of HeartCode courses varies based on the student’s self-assessment and knowledge of the cognitive material.",
    skills_testing: '8 Hour',
    price: '158',
    certification: 'American Heart Association© BLS certification. You will receive your BLS CPR eCard on the day of the class',
    date: '20203-10-11'
  },
  {
    title: 'Wound Care Skills',
    instructor: 'John Smith',
    description: 'Learn to properly place Ostomy Supplies in a patient',
    length: '2 hours via video',
    skills_testing: 'Few Questions at the end',
    price: '0',
    certification: '2hr towards Nurse Education',
    date: '2023-12-03'
  }
])
  .then(() => {
    console.log('Success!');
    process.exit();
  })
  .catch(err => {
    console.log('Failure!', err);
    process.exit();
  });
