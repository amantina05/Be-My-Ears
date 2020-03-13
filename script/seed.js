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
    Video.create({
      name: 'abc',
      videoUrl: '',
      description: 'learn your abcs in asl'
    }),
    Video.create({
      name: '1-30',
      videoUrl: 'https://youtu.be/hFCXyB6q2nU',
      description: 'learn your 123s in asl'
    }),
    Video.create({
      name: 'Basic Bicycle Vocabulary',
      videoUrl: 'https://youtu.be/cimH8aPqNWE',
      description: '• RIDE-BIKE • BIKE • HELMET • WHEEL • HANDLEBARS • SEAT'
    }),
    Video.create({
      name: 'Breathe',
      videoUrl: 'https://youtu.be/ybsmfjdWtCw',
      description: 'learn to sign breathe'
    }),
    Video.create({
      name: 'Skeleton or Bones',
      videoUrl: 'https://youtu.be/vZYEbykg6cA',
      description: 'learn to sign skeleton or bones'
    }),
    Video.create({
      name: 'Lungs',
      videoUrl: 'https://youtu.be/SoFuCoOfbl8',
      description: 'learn to sign lungs'
    }),
    Video.create({
      name: 'Nervous',
      videoUrl: 'https://youtu.be/DhzaFptHtLk',
      description: 'learn to sign nervous'
    }),
    Video.create({
      name: 'Brain',
      videoUrl: 'https://youtu.be/t8gkJrY2mSM.png',
      description: 'learn to sign brain'
      // <iframe width="560" height="315" src="https://www.youtube.com/embed/t8gkJrY2mSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }),
    Video.create({
      name: 'Spine',
      videoUrl: 'https://www.youtube.com/embed/HF2kbfAsyaI',
      description: 'learn to sign spine'
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
