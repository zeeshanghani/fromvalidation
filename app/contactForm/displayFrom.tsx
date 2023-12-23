import { contactTypes } from "../types/commontype";

export default function DisplayContact(props: { contactData: contactTypes[] }) {
  return (
    <div>

      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>FatherName</th>
            <th>Email</th>
            <th>Education</th>
            <th>Profession</th>
            <th>Adress</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
          {props.contactData.map((item, index) => {
            return (
              <tr  key={index}>
                <td>{item.name}</td>
                <td>{item.FatherName}</td>
                <td>{item.email}</td>
                <td>{item.education}</td>
                <td>{item.profession}</td>
                <td>{item.adress}</td>
                <td>{item.phone}</td>
                <td>{item.message}</td>
              </tr>
            )
          })}

        </table>
      </div>

    </div>
  )
}