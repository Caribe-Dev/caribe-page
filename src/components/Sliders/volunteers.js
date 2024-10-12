
import allVolunteers from "@/all-volunteers";
import { Avatar } from "@/components/Avatar";

const { volunteers } = allVolunteers;

const Volunteers = () => {
  return (
    <>
      <h2>Volunteers</h2>
      <div>
        {volunteers.map(({ name, image, social }) => {
          return (
            <div key={name}>
              <Avatar name={name} image={image} social={social} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Volunteers;