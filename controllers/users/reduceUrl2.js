/* import { Urls } from '../../models/shortUrl'; */
const Urls = require('../../models/shortUrl');

const handler = async (req, res) => {
  const prisma = new PrismaClient();
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substr(2, 6);

  try {
  const data = await prisma.link.create({
    data: { url, shortUrl }
  });
  
  prisma.$disconnect();

  return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}
module.exports = handler;