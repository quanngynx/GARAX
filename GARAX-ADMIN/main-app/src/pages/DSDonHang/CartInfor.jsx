import { useState } from 'react'
// import { Combobox } from '@headlessui/react'
const people = [
    'Wade Cooper',
    'Arlene McCoy',
    'Devon Webb',
    'Tom Cook',
    'Tanya Fox',
    'Hellen Schmidt',
  ]
  
function CartInfor(){
    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
        ? people
        : people.filter((person) => {
            return person.toLowerCase().includes(query.toLowerCase())
            })
    return(
        <div>
            <div className="text-center">Đơn hàng</div>
            <div className="item-center flex justify-between">
                Email:
                {/* <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                    <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
                    <Combobox.Options>
                        {filteredPeople.map((person) => (
                        <Combobox.Option key={person} value={person}>
                            {person}
                        </Combobox.Option>
                        ))}
                    </Combobox.Options>
                </Combobox> */}

            </div>
        </div>
    );
}

export default CartInfor;