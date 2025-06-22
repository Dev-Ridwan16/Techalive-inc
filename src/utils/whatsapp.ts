export function createWhatsappLink(message: string) {
  const encodedMessage = encodeURIComponent(message)

  return `${process.env.WHATSAPP_LINK}/${process.env.WHATSAPP_NUMBER}?text=${encodedMessage}`
}