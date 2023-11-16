
const getSchedule = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedule`)
  const responseJson = await response.json()
  return responseJson
}

const updateSchedule = async (stationId: string, isOpen: boolean) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/schedule/${stationId}`,
    {
      method: 'PUT', 
      body: JSON.stringify({isOpen})
    }
  )
  const responseJson = await response.json()
  return responseJson
}

export {
  getSchedule,
  updateSchedule
}