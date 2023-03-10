import cache from '@/utils/cache'
import { PrismaClient } from '@prisma/client'

export default cache('prisma', () => new PrismaClient())
