import { useEffect } from 'react'

const Team = () => {
  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className='w-screen pt-32 pb-20 max-md:pb-14 max-md:pt-32 max-md:p-5 container m-auto min-h-screen'>
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
    name: 'Dr. Sufal Das',
    position: 'Teacher in-charge',
    department: 'Ass. Professor, IT Dept.',
  },
  {
    name: 'Prof. Debdatta Kandar',
    position: 'Patron',
    department: 'HOD, IT Dept.',
  },
  {
    name: 'Priyanshu Raj',
    position: 'General Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Bishal Pandey',
    position: 'Asst. General Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Dewan Ariful Hussain',
    position: 'Finance Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Sintu Kumar Sharma',
    position: 'Creative Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Anupam Kumar Singh',
    position: 'Academic Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'San Jay Masih',
    position: 'Outreach Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Furkan Ali',
    position: 'Publication Secretary',
    department: 'BTech IT 4th Year',
  },
  {
    name: 'Abhi Nitnaware',
    position: 'Asst. Finance Secretary',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Abhishek Kumar Rai',
    position: 'Asst. Academic Secretary',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Mohammad Saqib',
    position: 'Asst. Creative Secretary I',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Pyboyina Viswaja',
    position: 'Asst. Creative Secretary II',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Nipu Kalita',
    position: 'Asst. Outreach Secretary',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Sanskar Kashyap',
    position: 'Asst. Publication Sec',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Liza Mehta',
    position: 'Executive Secretary',
    department: 'BTech IT 3rd Year',
  },
  {
    name: 'Bikash Barua',
    position: 'Asst. Executive Sec',
    department: 'BTech IT 3rd Year',
  },
]

export default Team
