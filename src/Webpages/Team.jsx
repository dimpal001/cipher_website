import { useEffect } from 'react'

const Team = () => {
  document.title = 'Team - Cipher | NEHU'
  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className='w-screen pb-20 max-md:pb-14 max-md:p-5 container m-auto min-h-screen'>
      <div className='h-[300px] flex justify-center items-center'>
        <p className='text-5xl animate__fadeInUp animate__animated max-md:text-4xl text-center pb-5 font-bold bg-gradient-to-r from-first to-second text-transparent bg-clip-text'>
          Leadership Team Overview
        </p>
      </div>
      <div className='grid animate__fadeInUp animate__animated md:grid-cols-2 lg:grid-cols-3 max-md:grid-cols-1 gap-x-14 gap-y-10 max-md:gap-y-8'>
        {Committee.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            position={item.position}
            department={item.department}
          />
        ))}
      </div>
    </div>
  )
}

const Card = ({ name, position, department }) => {
  return (
    <div>
      <div className='p-5 group bg-red-300 bg-opacity-10 rounded-2xl'>
        <p className='text-2xl group-hover:text-second transition-all duration-300'>
          {name}
        </p>
        <p className='text-sm text-gray-200 opacity-80'>
          {position} &nbsp; | &nbsp;
          <span className='font-extralight text-sm'>{department}</span>
        </p>
      </div>
    </div>
  )
}

const Committee = [
  {
    name: 'Prof. Debdatta Kandar',
    position: 'Patron',
    department: 'HOD, IT Dept.',
  },
  {
    name: 'Dr. Sufal Das',
    position: 'Teacher in-charge',
    department: 'Ass. Professor, IT Dept.',
  },

  {
    name: 'Mohammad Saqib',
    position: 'General Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Abhi Nithaware',
    position: 'Asst. General Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Raje Alom',
    position: 'Finance Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Pyboyina Viswaja',
    position: 'Creative Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Ujjwal Kumar',
    position: 'Academic Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Palmsan A sangma',
    position: 'Outreach Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Bikash Barua',
    position: 'Publication Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Ibapalei Shadap',
    position: 'Database Coordinator Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Liza Mehta',
    position: 'Executive Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Bimal Mochahary',
    position: 'Asst. Finance Sec',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Hansh Raj',
    position: 'Asst. Academic Sec I',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Soumojit Bhuin',
    position: 'Asst. Academic Sec II',
    department: 'BTech IT 2nd Year',
  },
  {
    name: 'Rehana Debbarma',
    position: 'Asst. Creative Sec',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Erisaca Vaichei',
    position: 'Asst. Outreach Sec',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Nabarup Daimary',
    position: 'Asst. Publication Sec',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Dibakar Patar',
    position: 'Asst. Database Coordinator Sec',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Sajeed Ahmed',
    position: 'Asst. Executive Sec I',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Nikunj Maheshwari',
    position: 'Asst. Executive Sec II',
    department: 'BTech IT 2nd Year',
  },
  {
    name: 'Sourav Rabha',
    position: 'Asst. Executive Sec III',
    department: 'BTech IT 2nd Year',
  },
  {
    name: 'Kumar Kartik',
    position: 'Asst. Executive Sec IV',
    department: 'BTech IT 2nd Year',
  },
  {
    name: 'Drona Bopche',
    position: 'Asst. Executive Sec V',
    department: 'BTech IT 2nd Year',
  },
]

export default Team
