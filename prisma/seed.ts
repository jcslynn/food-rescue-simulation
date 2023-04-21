import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const orgData: Prisma.OrganizationCreateInput[] = [
  {
    travelTime: 20,
    organizationSize: 134,
    foodAccess: 'LOW',
    povertyRate: 15,
    lastDonation: 'WEEKS_3',
    donationType: 'COMMON',
    incomeLevel: 23000,
    name: 'Sunrise Austin'
  },
  {
    travelTime: 30,
    organizationSize: 53,
    foodAccess: 'NORMAL',
    povertyRate: 11,
    lastDonation: 'NEVER',
    donationType: 'COMMON',
    incomeLevel: 31000,
    name: 'Casa Travis'
  },
  {
    travelTime: 10,
    organizationSize: 18,
    foodAccess: 'EXTREMELY_LOW',
    povertyRate: 31,
    lastDonation: 'WEEK_1',
    donationType: 'UNCOMMON',
    incomeLevel: 11000,
    name: 'Urban Roots ATX'
  },
  {
    travelTime: 10,
    organizationSize: 120,
    foodAccess: 'EXTREMELY_LOW',
    povertyRate: 60,
    lastDonation: 'WEEKS_4',
    donationType: 'COMMON',
    incomeLevel: 15000,
    name: 'East Austin Food Pantry'
  },
  {
    travelTime: 15,
    organizationSize: 260,
    foodAccess: 'LOW',
    povertyRate: 15,
    lastDonation: 'WEEKS_6',
    donationType: 'COMMON',
    incomeLevel: 25000,
    name: 'Central Texas Food Bank'
  },
  {
    travelTime: 10,
    organizationSize: 80,
    foodAccess: 'NORMAL',
    povertyRate: 55,
    lastDonation: 'NEVER',
    donationType: 'COMMON',
    incomeLevel: 20000,
    name: 'Austin Area Urban League'
  },
]

const modelData: Prisma.ModelCreateInput[] = [
    {
      travelTime: 20,
      organizationSize: 30,
      foodAccess: 15,
      povertyRate: 15,
      lastDonation: 25,
      donationType: 10,
      incomeLevel: 30,
    },
    {
        travelTime: 20,
        organizationSize: 34,
        foodAccess: 10,
        povertyRate: 15,
        lastDonation: 20,
        donationType: 10,
        incomeLevel: 10,
    },
  ]

async function main() {
  console.log(`Start seeding ...`)
  for (const o of orgData) {
    const org = await prisma.organization.create({
      data: o,
    })
    console.log(`Created organization with id: ${org.id}`)
  }
  for (const m of modelData) {
    const org = await prisma.model.create({
      data: m,
    })
    console.log(`Created model with id: ${org.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })