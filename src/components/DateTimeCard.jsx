import React from "react"

function DateTimeCard() {
  
    const rok = new Date().getFullYear();
    const mies = new Date().getMonth();
    const dzien = new Date().getDate();
    const dzientyg = new Date().getDay();
    const minuty = new Date().getMinutes();
    const godziny = new Date().getHours();
    const tydzien = ["poniedzialek","wtorek","sroda","czwartek","piatek","sobota","niedziela"];
  return (
    <>
      <p>{dzien}/{mies}/{rok} {tydzien[dzientyg-1]} {godziny}:{minuty}</p>
    </>
  )
}

export default DateTimeCard