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
      name: '123',
      videoUrl: '',
      description: 'learn your 123s in asl'
    })
  ])

  const images = await Promise.all([
    Image.create({
      name: 'a',
      imageUrl: '../public/Image/a.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'b',
      imageUrl: '../public/Image/b.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'c',
      imageUrl: '../public/Image/c.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'd',
      imageUrl: '../public/Image/d.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'e',
      imageUrl: '../public/Image/e.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'f',
      imageUrl: '../public/Image/f.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'g',
      imageUrl: '../public/Image/g.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'h',
      imageUrl: '../public/Image/h.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'i',
      imageUrl: '../public/Image/i.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'j',
      imageUrl: '../public/Image/j.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'k',
      imageUrl: '../public/Image/k.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'l',
      imageUrl: '../public/Image/l.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'm',
      imageUrl: '../public/Image/m.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'n',
      imageUrl: '../public/Image/n.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'o',
      imageUrl: '../public/Image/o.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'p',
      imageUrl: '../public/Image/p.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'q',
      imageUrl: '../public/Image/q.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'r',
      imageUrl: '../public/Image/r.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 's',
      imageUrl: '../public/Image/s.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 't',
      imageUrl: '../public/Image/t.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'u',
      imageUrl: '../public/Image/u.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'v',
      imageUrl: '../public/Image/v.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'w',
      imageUrl: '../public/Image/w.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'x',
      imageUrl: '../public/Image/x.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'y',
      imageUrl: '../public/Image/y.png',
      description: 'a in asl'
    }),
    Image.create({
      name: 'z',
      imageUrl: '../public/Image/z.png',
      description: 'a in asl'
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
