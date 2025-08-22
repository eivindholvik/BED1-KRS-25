async function makeReservation(userId, roomId, url) {
  const userId2 = Number(userId);
  const roomId2 = Number(roomId);
  let startDate = prompt("Please provide starting date in format YYYY-MM-DD HH:MM:SS");
  let endDate = prompt("Please provide ending date in format YYYY-MM-DD HH:MM:SS");
  const returnObj = {
    userId: userId2,
    roomId: roomId2,
    startDate,
    endDate
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(returnObj)
  });
  const resData = 'Made reservation';
  console.log(response);
  //location.reload()
  return resData;
}