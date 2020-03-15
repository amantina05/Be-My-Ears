'use strict'

const db = require('../server/db')
const {User, Video, Image} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const videos = await Promise.all([
    // Video.create({
    //   name: 'abc',
    //   videoUrl: '',
    //   description: 'learn your abcs in asl'
    // }),
    // Video.create({
    //   name: '1-30',
    //   videoUrl: 'https://youtu.be/hFCXyB6q2nU',
    //   description: 'learn your 123s in asl'
    // }),
    // Video.create({
    //   name: 'Basic Bicycle Vocabulary',
    //   videoUrl: 'https://youtu.be/cimH8aPqNWE',
    //   description: '• RIDE-BIKE • BIKE • HELMET • WHEEL • HANDLEBARS • SEAT'
    // }),
    // Video.create({
    //   name: 'Breathe',
    //   videoUrl: 'https://youtu.be/ybsmfjdWtCw',
    //   description: 'learn to sign breathe'
    // }),
    // Video.create({
    //   name: 'Skeleton or Bones',
    //   videoUrl: 'https://youtu.be/vZYEbykg6cA',
    //   description: 'learn to sign skeleton or bones'
    // }),
    // Video.create({
    //   name: 'Lungs',
    //   videoUrl: 'https://youtu.be/SoFuCoOfbl8',
    //   description: 'learn to sign lungs'
    // }),
    // Video.create({
    //   name: 'Nervous',
    //   videoUrl: 'https://youtu.be/DhzaFptHtLk',
    //   description: 'learn to sign nervous'
    // }),
    // Video.create({
    //   name: 'Brain',
    //   videoUrl: 'https://youtu.be/t8gkJrY2mSM.png',
    //   description: 'learn to sign brain'
    //   // <iframe width="560" height="315" src="https://www.youtube.com/embed/t8gkJrY2mSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    // }),
    // Video.create({
    //   name: 'Spine',
    //   videoUrl: 'https://www.youtube.com/embed/HF2kbfAsyaI.mp4',
    //   description: 'learn to sign spine'
    // }),
    Video.create({
      name: 'Monday',
      videoUrl: 'https://imgur.com/mbh5Nyn.mp4',
      description: 'learn how to sign Monday in asl'
    }),
    Video.create({
      name: 'Tuesday',
      videoUrl: 'https://imgur.com/MINc0Nu.mp4',
      description: 'learn how to sign Tuesday in asl'
    }),
    Video.create({
      name: 'Wednesday',
      videoUrl: 'https://imgur.com/IObOX4s.mp4',
      description: 'learn how to sign Wednesday in asl'
    }),
    Video.create({
      name: 'Thursday',
      videoUrl: 'https://imgur.com/q27cOqK.mp4',
      description: 'learn how to sign Thursday in asl'
    }),
    Video.create({
      name: 'Friday',
      videoUrl: 'https://imgur.com/H8gh7vE.mp4',
      description: 'learn how to sign Friday in asl'
    }),
    Video.create({
      name: 'Saturday',
      videoUrl: 'https://imgur.com/97HFIW4.mp4',
      description: 'learn how to sign Saturday in asl'
    }),
    Video.create({
      name: 'Sunday',
      videoUrl: 'https://imgur.com/BanxfmR.mp4',
      description: 'learn how to sign Sunday in asl'
    }),
    Video.create({
      name: 'Weekend',
      videoUrl: 'https://imgur.com/QvBtaRQ.mp4',
      description: 'learn how to sign Weekend in asl'
    }),
    Video.create({
      name: 'Africa',
      videoUrl: 'https://imgur.com/w0fVW6E.mp4',
      description: 'learn how to sign Africa in asl'
    }),
    Video.create({
      name: 'America',
      videoUrl: 'https://imgur.com/XuIBiuA.mp4',
      description: 'learn how to sign Weekend in asl'
    }),
    Video.create({
      name: 'Australia',
      videoUrl: 'https://imgur.com/46r03uu.mp4',
      description: 'learn how to sign Australia in asl'
    }),
    Video.create({
      name: 'Canada',
      videoUrl: 'https://imgur.com/eL0YL6D.mp4',
      description: 'learn how to sign Canada in asl'
    }),
    Video.create({
      name: 'China',
      videoUrl: 'https://imgur.com/s54yrF9.mp4',
      description: 'learn how to sign China in asl'
    }),
    Video.create({
      name: 'England',
      videoUrl: 'https://imgur.com/LhDpeFf.mp4',
      description: 'learn how to sign England in asl'
    }),
    Video.create({
      name: 'Europe',
      videoUrl: 'https://imgur.com/mWZpjrr.mp4',
      description: 'learn how to sign Europe in asl'
    }),
    Video.create({
      name: 'France',
      videoUrl: 'https://imgur.com/cbFoRu3.mp4',
      description: 'learn how to sign France in asl'
    }),
    Video.create({
      name: 'Germany',
      videoUrl: 'https://imgur.com/IVMvDv4.mp4',
      description: 'learn how to sign Germany in asl'
    }),
    Video.create({
      name: 'India',
      videoUrl: 'https://imgur.com/exwlLzb.mp4',
      description: 'learn how to sign India in asl'
    }),
    Video.create({
      name: 'Ireland',
      videoUrl: 'https://imgur.com/kQIq6Fq.mp4',
      description: 'learn how to sign Ireland in asl'
    }),
    Video.create({
      name: 'Italy',
      videoUrl: 'https://imgur.com/3JJ5Hgi.mp4',
      description: 'learn how to sign Italy in asl'
    }),
    Video.create({
      name: 'Japan',
      videoUrl: 'https://imgur.com/sGNNHPd.mp4',
      description: 'learn how to sign Japan in asl'
    }),
    Video.create({
      name: 'Mexico',
      videoUrl: 'https://imgur.com/XDtEArw.mp4',
      description: 'learn how to sign Mexico in asl'
    }),
    Video.create({
      name: 'Russia',
      videoUrl: 'https://imgur.com/6tbksBB.mp4',
      description: 'learn how to sign Russia in asl'
    }),
    Video.create({
      name: 'Spain',
      videoUrl: 'https://imgur.com/JMYaXQR.mp4',
      description: 'learn how to sign Spain in asl'
    }),

    Video.create({
      name: 'abandon',
      videoUrl: 'https://imgur.com/K1S26vL.mp4',
      description: 'learn how to sign abandon in asl'
    }),
    Video.create({
      name: 'about',
      videoUrl: 'https://imgur.com/NqEpNGJ.mp4',
      description: 'learn how to sign about in asl'
    }),
    Video.create({
      name: 'above',
      videoUrl: 'https://imgur.com/VW2pGWg.mp4',
      description: 'learn how to sign above in asl'
    }),
    Video.create({
      name: 'accept',
      videoUrl: 'https://imgur.com/qyHZOyU.mp4',
      description: 'learn how to sign accept in asl'
    }),
    Video.create({
      name: 'accident',
      videoUrl: 'https://imgur.com/WeXua3W.mp4',
      description: 'learn how to sign accident in asl'
    }),
    Video.create({
      name: 'act',
      videoUrl: 'https://imgur.com/CymX09C.mp4',
      description: 'learn how to sign act in asl'
    }),
    Video.create({
      name: 'add-to',
      videoUrl: 'https://imgur.com/RiYQ8Tx.mp4',
      description: 'learn how to sign add-to in asl'
    }),
    Video.create({
      name: 'address',
      videoUrl: 'https://imgur.com/FKzChMY.mp4',
      description: 'learn how to sign address in asl'
    }),
    Video.create({
      name: 'advertise',
      videoUrl: 'https://imgur.com/1DQTeut.mp4',
      description: 'learn how to sign advertise in asl'
    }),
    Video.create({
      name: 'advise',
      videoUrl: 'https://imgur.com/4KSCMng.mp4',
      description: 'learn how to sign advise in asl'
    }),
    Video.create({
      name: 'act',
      videoUrl: 'https://imgur.com/qHAsDcs.mp4',
      description: 'learn how to sign act in asl'
    }),
    Video.create({
      name: 'afraid',
      videoUrl: 'https://imgur.com/Clmy0II.mp4',
      description: 'learn how to sign afraid in asl'
    }),
    Video.create({
      name: 'after',
      videoUrl: 'https://imgur.com/Cgh7vxr.mp4',
      description: 'learn how to sign after in asl'
    }),
    Video.create({
      name: 'afternoon',
      videoUrl: 'https://imgur.com/njcOpAS.mp4',
      description: 'learn how to sign afternoon in asl'
    }),
    Video.create({
      name: 'again',
      videoUrl: 'https://imgur.com/xXDMC83.mp4',
      description: 'learn how to sign Weekend in asl'
    }),
    Video.create({
      name: 'against',
      videoUrl: 'https://imgur.com/e7gDbfZ.mp4',
      description: 'learn how to sign against in asl'
    }),
    Video.create({
      name: 'aggressive',
      videoUrl: 'https://imgur.com/V9CB8RY.mp4',
      description: 'learn how to sign aggressive in asl'
    }),
    Video.create({
      name: 'agree',
      videoUrl: 'https://imgur.com/uoym5ll.mp4',
      description: 'learn how to sign agree in asl'
    }),
    Video.create({
      name: 'ahead',
      videoUrl: 'https://imgur.com/jQPwfp3.mp4',
      description: 'learn how to sign ahead in asl'
    }),
    Video.create({
      name: 'airplane',
      videoUrl: 'https://imgur.com/a062hp8.mp4',
      description: 'learn how to sign airplane in asl'
    }),
    Video.create({
      name: 'alarm',
      videoUrl: 'https://imgur.com/lczzjzA.mp4',
      description: 'learn how to sign alarm in asl'
    }),
    Video.create({
      name: 'announce',
      videoUrl: 'https://imgur.com/aED1ner.mp4',
      description: 'learn how to sign announce in asl'
    }),
    Video.create({
      name: 'all',
      videoUrl: 'all.mp4',
      description: 'learn how to sign all in asl'
    }),
    Video.create({
      name: 'amazed',
      videoUrl: 'https://imgur.com/fVEToAA.mp4',
      description: 'learn how to sign amazade in asl'
    }),
    Video.create({
      name: 'ambulance',
      videoUrl: 'https://imgur.com/uswjkqv.mp4',
      description: 'learn how to sign ambulance in asl'
    }),
    Video.create({
      name: 'analyze',
      videoUrl: 'https://imgur.com/H0iXx83.mp4',
      description: 'learn how to sign analyze in asl'
    }),
    Video.create({
      name: 'and',
      videoUrl: 'https://imgur.com/h0Plkaj.mp4',
      description: 'learn how to sign and in asl'
    }),
    Video.create({
      name: 'angry',
      videoUrl: 'https://imgur.com/yz5soXN.mp4',
      description: 'learn how to sign angry in asl'
    }),
    Video.create({
      name: 'answer',
      videoUrl: 'https://imgur.com/NdK8etN.mp4',
      description: 'learn how to sign answer in asl'
    }),
    Video.create({
      name: 'anxious',
      videoUrl: 'https://imgur.com/8MUeQhg.mp4',
      description: 'learn how to sign anxious in asl'
    }),
    Video.create({
      name: 'any',
      videoUrl: 'https://imgur.com/WiWY49A.mp4',
      description: 'learn how to sign any in asl'
    }),
    Video.create({
      name: 'anyone',
      videoUrl: 'https://imgur.com/1ASVCIC.mp4',
      description: 'learn how to sign anyone in asl'
    }),
    Video.create({
      name: 'apply',
      videoUrl: 'https://imgur.com/eszMr1L.mp4',
      description: 'learn how to sign apply in asl'
    }),
    Video.create({
      name: 'anyway',
      videoUrl: 'https://imgur.com/2jMuVfy.mp4',
      description: 'learn how to sign anyway in asl'
    }),
    Video.create({
      name: 'appear',
      videoUrl: 'https://imgur.com/eJ8VMM0.mp4',
      description: 'learn how to sign appear in asl'
    }),
    Video.create({
      name: 'applaud',
      videoUrl: 'https://imgur.com/18H5cWN.mp4',
      description: 'learn how to sign applaud in asl'
    }),
    Video.create({
      name: 'apple',
      videoUrl: 'https://imgur.com/Tapxqbk.mp4',
      description: 'learn how to sign apple in asl'
    }),
    Video.create({
      name: 'appointment',
      videoUrl: 'https://imgur.com/hiLOIpw.mp4',
      description: 'learn how to sign appointment in asl'
    }),
    Video.create({
      name: 'approve',
      videoUrl: 'https://imgur.com/u5KnVOg.mp4',
      description: 'learn how to sign approve in asl'
    }),
    Video.create({
      name: 'approximately',
      videoUrl: 'https://imgur.com/22GoIpv.mp4',
      description: 'learn how to sign approximately in asl'
    }),
    Video.create({
      name: 'area',
      videoUrl: 'https://imgur.com/J0AlU9H.mp4',
      description: 'learn how to sign area in asl'
    }),
    Video.create({
      name: 'apply',
      videoUrl: 'https://imgur.com/1GRuBtg.mp4',
      description: 'learn how to sign apply in asl'
    }),
    Video.create({
      name: 'arrive',
      videoUrl: 'https://imgur.com/XkgM7Vj.mp4',
      description: 'learn how to sign arrive in asl'
    }),
    Video.create({
      name: 'ashamed',
      videoUrl: 'https://imgur.com/WWD06a1.mp4',
      description: 'learn how to sign ashamed in asl'
    }),
    Video.create({
      name: 'ask',
      videoUrl: 'https://imgur.com/ta7H0HP.mp4',
      description: 'learn how to sign ask in asl'
    }),
    Video.create({
      name: 'assign',
      videoUrl: 'https://imgur.com/ofoCUUo.mp4',
      description: 'learn how to sign assign in asl'
    }),
    Video.create({
      name: 'art',
      videoUrl: 'https://imgur.com/JtYtMYn.mp4',
      description: 'learn how to sign art in asl'
    }),
    Video.create({
      name: 'article',
      videoUrl: 'https://imgur.com/T5gTi3f.mp4',
      description: 'learn how to sign article in asl'
    }),
    Video.create({
      name: 'assistant',
      videoUrl: 'https://imgur.com/ucq89g0.mp4',
      description: 'learn how to sign assistant in asl'
    }),
    Video.create({
      name: 'attend',
      videoUrl: 'https://imgur.com/gdoFL9v.mp4',
      description: 'learn how to sign attend in asl'
    }),
    Video.create({
      name: 'attitude',
      videoUrl: 'https://imgur.com/CoCEkm0.mp4',
      description: 'learn how to sign attitude in asl'
    }),
    Video.create({
      name: 'attracted-to',
      videoUrl: 'https://imgur.com/UpyrkGt.mp4',
      description: 'learn how to sign attracted-to in asl'
    }),
    Video.create({
      name: 'audience',
      videoUrl: 'https://imgur.com/Ea0Yx6c.mp4',
      description: 'learn how to sign audience in asl'
    }),
    Video.create({
      name: 'aunt',
      videoUrl: 'https://imgur.com/jQpfF3l.mp4',
      description: 'learn how to sign aunt in asl'
    }),
    Video.create({
      name: 'average',
      videoUrl: 'https://imgur.com/6Iiv8Rt.mp4',
      description: 'learn how to sign average in asl'
    }),
    Video.create({
      name: 'avoid',
      videoUrl: 'https://imgur.com/AscUzaq.mp4',
      description: 'learn how to sign avoid in asl'
    }),

    Video.create({
      name: 'baby',
      videoUrl: 'https://imgur.com/sIuaxjt.mp4',
      description: 'learn how to sign baby in asl'
    }),
    Video.create({
      name: 'bake',
      videoUrl: 'https://imgur.com/pPdiBgJ.mp4',
      description: 'learn how to sign bake in asl'
    }),
    Video.create({
      name: 'balance',
      videoUrl: 'https://imgur.com/4v4xIKX.mp4',
      description: 'learn how to sign balance in asl'
    }),
    Video.create({
      name: 'bacon',
      videoUrl: 'https://imgur.com/lwGC3TD.mp4',
      description: 'learn how to sign bacon in asl'
    }),
    Video.create({
      name: 'bad',
      videoUrl: 'https://imgur.com/fBG6D7L.mp4',
      description: 'learn how to sign bad in asl'
    }),
    Video.create({
      name: 'bake',
      videoUrl: 'https://imgur.com/FX4k8zr.mp4',
      description: 'learn how to sign bake in asl'
    }),
    Video.create({
      name: 'balance',
      videoUrl: 'https://imgur.com/9sUAMqv.mp4',
      description: 'learn how to sign balance in asl'
    }),
    Video.create({
      name: 'ball',
      videoUrl: 'https://imgur.com/OjVeERo.mp4',
      description: 'learn how to sign ball in asl'
    }),
    Video.create({
      name: 'banana',
      videoUrl: 'https://imgur.com/Dpdf9eP.mp4',
      description: 'learn how to sign banana in asl'
    }),
    Video.create({
      name: 'average',
      videoUrl: 'https://imgur.com/6Iiv8Rt.mp4',
      description: 'learn how to sign average in asl'
    }),
    Video.create({
      name: 'bank',
      videoUrl: 'https://imgur.com/nai0EI0.mp4',
      description: 'learn how to sign bank in asl'
    }),
    Video.create({
      name: 'basketball',
      videoUrl: 'https://imgur.com/iexPkP9.mp4',
      description: 'learn how to sign basketball in asl'
    }),
    Video.create({
      name: 'baseball',
      videoUrl: 'https://imgur.com/BhV1h9u.mp4',
      description: 'learn how to sign baseball in asl'
    }),
    Video.create({
      name: 'basement',
      videoUrl: 'https://imgur.com/9vtvJel.mp4',
      description: 'learn how to sign basement in asl'
    }),
    Video.create({
      name: 'basic',
      videoUrl: 'https://imgur.com/rxSHYpw.mp4',
      description: 'learn how to sign basic in asl'
    }),
    Video.create({
      name: 'basketball',
      videoUrl: 'https://imgur.com/J6UUIyP.mp4',
      description: 'learn how to sign basketball in asl'
    }),
    Video.create({
      name: 'beach',
      videoUrl: 'https://imgur.com/9Pvl5qC.mp4',
      description: 'learn how to sign beach in asl'
    }),
    Video.create({
      name: 'bear',
      videoUrl: 'https://imgur.com/kOTuMTG.mp4',
      description: 'learn how to sign bear in asl'
    }),
    Video.create({
      name: 'because',
      videoUrl: 'https://imgur.com/ljmz2Ly.mp4',
      description: 'learn how to sign because in asl'
    }),
    Video.create({
      name: 'become',
      videoUrl: 'https://imgur.com/kZpf4QB.mp4',
      description: 'learn how to sign become in asl'
    }),
    Video.create({
      name: 'bed',
      videoUrl: 'https://imgur.com/5EORTrT.mp4',
      description: 'learn how to sign bed in asl'
    }),
    Video.create({
      name: 'beer',
      videoUrl: 'https://imgur.com/J4rIo6a.mp4',
      description: 'learn how to sign beer in asl'
    }),
    Video.create({
      name: 'before',
      videoUrl: 'https://imgur.com/QbTK821.mp4',
      description: 'learn how to sign before in asl'
    }),
    Video.create({
      name: 'bell',
      videoUrl: 'https://imgur.com/FdoXpfz.mp4',
      description: 'learn how to sign bell in asl'
    }),
    Video.create({
      name: 'benefit',
      videoUrl: 'https://imgur.com/m4pYJJL.mp4',
      description: 'learn how to sign benefit in asl'
    }),
    Video.create({
      name: 'best',
      videoUrl: 'https://imgur.com/ozq8yG7.mp4',
      description: 'learn how to sign best in asl'
    }),
    Video.create({
      name: 'bet',
      videoUrl: 'https://imgur.com/3kQjNfS.mp4',
      description: 'learn how to sign bet in asl'
    }),
    Video.create({
      name: 'between',
      videoUrl: 'https://imgur.com/j0jDY2O.mp4',
      description: 'learn how to sign between in asl'
    }),
    Video.create({
      name: 'bicylce',
      videoUrl: 'https://imgur.com/BjxIuHh.mp4',
      description: 'learn how to sign bicyle in asl'
    }),
    Video.create({
      name: 'biology',
      videoUrl: 'https://imgur.com/cimYPG0.mp4',
      description: 'learn how to sign biology in asl'
    }),
    Video.create({
      name: 'believe',
      videoUrl: 'https://imgur.com/xKYFUZg.mp4',
      description: 'learn how to sign believe in asl'
    }),
    Video.create({
      name: 'below',
      videoUrl: 'https://imgur.com/Fgbaokx.mp4',
      description: 'learn how to sign below in asl'
    }),
    Video.create({
      name: 'benefit',
      videoUrl: 'https://imgur.com/4BwZi0d.mp4',
      description: 'learn how to sign benefit in asl'
    }),
    Video.create({
      name: 'best',
      videoUrl: 'https://imgur.com/4dnT7cC.mp4',
      description: 'learn how to sign best in asl'
    }),
    Video.create({
      name: 'bet',
      videoUrl: 'https://imgur.com/8dcot8C.mp4',
      description: 'learn how to sign bet in asl'
    }),
    Video.create({
      name: 'better',
      videoUrl: 'https://imgur.com/HzHIB4S.mp4',
      description: 'learn how to sign better in asl'
    }),
    Video.create({
      name: 'between',
      videoUrl: 'https://imgur.com/UH4jMLw.mp4',
      description: 'learn how to sign between in asl'
    }),
    Video.create({
      name: 'big',
      videoUrl: 'https://imgur.com/UH4jMLw.mp4',
      description: 'learn how to sign big in asl'
    }),
    Video.create({
      name: 'bird',
      videoUrl: 'https://imgur.com/vYUwtzc.mp4',
      description: 'learn how to sign bird in asl'
    }),
    Video.create({
      name: 'birthday',
      videoUrl: 'https://imgur.com/ul78TXF.mp4',
      description: 'learn how to sign birthday in asl'
    }),
    Video.create({
      name: 'blind',
      videoUrl: 'https://imgur.com/QSd1UVz.mp4',
      description: 'learn how to sign blind in asl'
    }),
    Video.create({
      name: 'blonde',
      videoUrl: 'https://imgur.com/c3Z2viR.mp4',
      description: 'learn how to sign blonde in asl'
    }),
    Video.create({
      name: 'blood',
      videoUrl: 'https://imgur.com/jlF756j.mp4',
      description: 'learn how to sign blood in asl'
    }),
    Video.create({
      name: 'boat',
      videoUrl: 'https://imgur.com/zaV3yC7.mp4',
      description: 'learn how to sign boat in asl'
    }),
    Video.create({
      name: 'body',
      videoUrl: 'https://imgur.com/X9txnU6.mp4',
      description: 'learn how to sign body in asl'
    }),
    Video.create({
      name: 'book',
      videoUrl: 'https://imgur.com/QRkZ2M3.mp4',
      description: 'learn how to sign book in asl'
    }),
    Video.create({
      name: 'born',
      videoUrl: 'https://imgur.com/QRkZ2M3.mp4',
      description: 'learn how to sign born in asl'
    }),
    Video.create({
      name: 'boring',
      videoUrl: 'https://imgur.com/8z7hF3f.mp4',
      description: 'learn how to sign boring in asl'
    }),
    Video.create({
      name: 'borrow',
      videoUrl: 'https://imgur.com/4NLzU1L.mp4',
      description: 'learn how to sign borrow in asl'
    }),
    Video.create({
      name: 'boss',
      videoUrl: 'https://imgur.com/giUT8wQ.mp4',
      description: 'learn how to sign boss in asl'
    }),
    Video.create({
      name: 'both',
      videoUrl: 'https://imgur.com/M7cjwbO.mp4',
      description: 'learn how to sign both in asl'
    }),
    Video.create({
      name: 'body',
      videoUrl: 'https://imgur.com/YZ0zVb1.mp4',
      description: 'learn how to sign body in asl'
    }),
    Video.create({
      name: 'book',
      videoUrl: 'https://imgur.com/P5uGzHH.mp4',
      description: 'learn how to sign book in asl'
    }),
    Video.create({
      name: 'brother',
      videoUrl: 'https://imgur.com/FKkUQP6.mp4',
      description: 'learn how to sign brother in asl'
    }),
    Video.create({
      name: 'bread',
      videoUrl: 'https://imgur.com/ea9i67x.mp4',
      description: 'learn how to sign bread in asl'
    }),
    Video.create({
      name: 'break',
      videoUrl: 'https://imgur.com/BK16nk9.mp4',
      description: 'learn how to sign break in asl'
    }),
    Video.create({
      name: 'breakfast',
      videoUrl: 'https://imgur.com/OYgtQmu.mp4',
      description: 'learn how to sign breakfast in asl'
    }),
    Video.create({
      name: 'bring',
      videoUrl: 'https://imgur.com/ibpkfP6.mp4',
      description: 'learn how to sign bring in asl'
    }),
    Video.create({
      name: 'boy',
      videoUrl: 'https://imgur.com/ZZaTRhm.mp4',
      description: 'learn how to sign boy in asl'
    }),
    Video.create({
      name: 'bowling',
      videoUrl: 'https://imgur.com/6bOB7u9.mp4',
      description: 'learn how to sign bowling in asl'
    }),
    Video.create({
      name: 'brave',
      videoUrl: 'https://imgur.com/I4edZ9E.mp4',
      description: 'learn how to sign brave in asl'
    }),
    Video.create({
      name: 'bread',
      videoUrl: 'https://imgur.com/S7niINU.mp4',
      description: 'learn how to sign bread in asl'
    }),
    Video.create({
      name: 'breathe',
      videoUrl: 'https://imgur.com/Oxug1ZC.mp4',
      description: 'learn how to sign breathe in asl'
    }),
    Video.create({
      name: 'bridge',
      videoUrl: 'https://imgur.com/rddX7st.mp4',
      description: 'learn how to sign bridge in asl'
    }),
    Video.create({
      name: 'bring',
      videoUrl: 'https://imgur.com/cQE8k8F.mp4',
      description: 'learn how to sign bring in asl'
    }),
    Video.create({
      name: 'broke',
      videoUrl: 'https://imgur.com/jkmHN3i.mp4',
      description: 'learn how to sign broke in asl'
    }),
    Video.create({
      name: 'brother',
      videoUrl: 'https://imgur.com/1iLWgiB.mp4',
      description: 'learn how to sign brother in asl'
    }),
    Video.create({
      name: 'bug',
      videoUrl: 'https://imgur.com/VKg5P7T.mp4',
      description: 'learn how to sign bug in asl'
    }),
    Video.create({
      name: 'build',
      videoUrl: 'https://imgur.com/xom2Ati.mp4',
      description: 'learn how to sign build in asl'
    }),
    Video.create({
      name: 'bullentin-board',
      videoUrl: 'https://imgur.com/w9VzH8e.mp4',
      description: 'learn how to sign bulletin-board in asl'
    }),
    Video.create({
      name: 'busy',
      videoUrl: 'https://imgur.com/MEhn1TP.mp4',
      description: 'learn how to sign busy in asl'
    }),
    Video.create({
      name: 'butter',
      videoUrl: 'https://imgur.com/9x7T2F6.mp4',
      description: 'learn how to sign butter in asl'
    }),
    Video.create({
      name: 'but',
      videoUrl: 'https://imgur.com/i0fSmmV.mp4',
      description: 'learn how to sign but in asl'
    }),
    Video.create({
      name: 'build',
      videoUrl: 'https://imgur.com/jwTMqHX.mp4',
      description: 'learn how to sign build in asl'
    }),
    Video.create({
      name: 'bury',
      videoUrl: 'https://imgur.com/AmpWS1t.mp4',
      description: 'learn how to sign bury in asl'
    }),
    Video.create({
      name: 'buy',
      videoUrl: 'https://imgur.com/M7cjwbO.mp4',
      description: 'learn how to sign buy in asl'
    })
  ])

  const images = await Promise.all([
    Image.create({
      name: 'a',
      imageUrl: 'https://imgur.com/5y1vQys.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'b',
      imageUrl: 'https://imgur.com/MuO2xHY.png',
      description: 'b in asl'
    }),
    Image.create({
      name: 'c',
      imageUrl: 'https://imgur.com/lEIICKC.png',
      description: 'c in asl'
    }),
    Image.create({
      name: 'd',
      imageUrl: 'https://imgur.com/Ll07o0E.png',
      description: 'd in asl'
    }),
    Image.create({
      name: 'e',
      imageUrl: 'https://imgur.com/QPTyKDx.png',
      description: 'e in asl'
    }),
    Image.create({
      name: 'f',
      imageUrl: 'https://imgur.com/FfRgQDO.png',
      description: 'f in asl'
    }),
    Image.create({
      name: 'g',
      imageUrl: 'https://imgur.com/DFfK7or.png',
      description: 'g in asl'
    }),
    Image.create({
      name: 'h',
      imageUrl: 'https://imgur.com/Bopk9iw.png',
      description: 'h in asl'
    }),
    Image.create({
      name: 'i',
      imageUrl: 'https://imgur.com/Duw1NK1.png',
      description: 'i in asl'
    }),
    Image.create({
      name: 'j',
      imageUrl: 'https://imgur.com/GzUCO8M.png',
      description: 'j in asl'
    }),
    Image.create({
      name: 'k',
      imageUrl: 'https://imgur.com/PGMNSGF.png',
      description: 'k in asl'
    }),
    Image.create({
      name: 'l',
      imageUrl: 'https://imgur.com/dkqCY81.png',
      description: 'l in asl'
    }),
    Image.create({
      name: 'm',
      imageUrl: 'https://imgur.com/3ws6jFu.png',
      description: 'm in asl'
    }),
    Image.create({
      name: 'n',
      imageUrl: 'https://imgur.com/IM5AXXH.png',
      description: 'n in asl'
    }),
    Image.create({
      name: 'o',
      imageUrl: 'https://imgur.com/zxmHPXY.png',
      description: 'o in asl'
    }),
    Image.create({
      name: 'p',
      imageUrl: 'https://imgur.com/ppcsI9j.png',
      description: 'p in asl'
    }),
    Image.create({
      name: 'q',
      imageUrl: 'https://imgur.com/60JhnuP.png',
      description: 'q in asl'
    }),
    Image.create({
      name: 'r',
      imageUrl: 'https://imgur.com/pJQiLOH.png',
      description: 'r in asl'
    }),
    Image.create({
      name: 's',
      imageUrl: 'https://imgur.com/VN9zj5f.png',
      description: 's in asl'
    }),
    Image.create({
      name: 't',
      imageUrl: 'https://imgur.com/1AfTBwg.png',
      description: 't in asl'
    }),
    Image.create({
      name: 'u',
      imageUrl: 'https://imgur.com/nIrr63X.png',
      description: 'u in asl'
    }),
    Image.create({
      name: 'v',
      imageUrl: 'https://imgur.com/VI92jQ1.png',
      description: 'v in asl'
    }),
    Image.create({
      name: 'w',
      imageUrl: 'https://imgur.com/1QLVgNv.png',
      description: 'w in asl'
    }),
    Image.create({
      name: 'x',
      imageUrl: 'https://imgur.com/3MRfAt7.png',
      description: 'x in asl'
    }),
    Image.create({
      name: 'y',
      imageUrl: 'https://imgur.com/8otAugj.png',
      description: 'y in asl'
    }),
    Image.create({
      name: 'z',
      imageUrl: 'https://imgur.com/vn6gFVX.png',
      description: 'z in asl'
    }),

    Image.create({
      name: '1',
      imageUrl: 'https://imgur.com/BgTOGiX.png',
      description: '1 in asl'
    }),
    Image.create({
      name: '2',
      imageUrl: 'https://imgur.com/RKjO2W3.png',
      description: '2 in asl'
    }),
    Image.create({
      name: '3',
      imageUrl: 'https://imgur.com/Dszce8K.png',
      description: '3 in asl'
    }),
    Image.create({
      name: '4',
      imageUrl: 'https://imgur.com/NXcmjaM.png',
      description: '4 in asl'
    }),
    Image.create({
      name: '5',
      imageUrl: 'https://imgur.com/zjSGdle.png',
      description: '5 in asl'
    }),
    Image.create({
      name: '6',
      imageUrl: 'https://imgur.com/eVfEZRO.png',
      description: '6 in asl'
    }),
    Image.create({
      name: '7',
      imageUrl: 'https://imgur.com/ivEDCCW.png',
      description: '7 in asl'
    }),
    Image.create({
      name: '8',
      imageUrl: 'https://imgur.com/IF8Rerc.png',
      description: '8 in asl'
    }),
    Image.create({
      name: '9',
      imageUrl: 'https://imgur.com/QM3lKIr.png',
      description: '9 in asl'
    }),
    Image.create({
      name: '10',
      imageUrl: 'https://imgur.com/cwpuU44.png',
      description: '10 in asl'
    }),
    Image.create({
      name: '11',
      imageUrl: 'https://i.imgur.com/M0FGtVF.png',
      description: '11 in asl'
    }),
    Image.create({
      name: '12',
      imageUrl: 'https://imgur.com/RpHJoUj.png',
      description: '12 in asl'
    }),
    Image.create({
      name: '13',
      imageUrl: 'https://imgur.com/nhDurC2.png',
      description: '13 in asl'
    }),
    Image.create({
      name: '14',
      imageUrl: 'https://imgur.com/zsZSwF3.png',
      description: '14 in asl'
    }),
    Image.create({
      name: '15',
      imageUrl: 'https://imgur.com/20SosAj.png',
      description: '15 in asl'
    }),
    Image.create({
      name: '16',
      imageUrl: 'https://imgur.com/MOoy9aB.png',
      description: '16 in asl'
    }),
    Image.create({
      name: '17',
      imageUrl: 'https://imgur.com/zu5WS9C.png',
      description: '17 in asl'
    }),
    Image.create({
      name: '18',
      imageUrl: 'https://imgur.com/ONODQHF.png',
      description: '18 in asl'
    }),
    Image.create({
      name: '19',
      imageUrl: 'https://imgur.com/lCaeDrJ.png',
      description: '19 in asl'
    }),
    Image.create({
      name: '20',
      imageUrl: 'https://imgur.com/9HxQZUh.png',
      description: '20 in asl'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${videos.length} videos`)
  console.log(`seeded ${images.length} images`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
