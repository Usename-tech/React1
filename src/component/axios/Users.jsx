import { useState } from "react";
import "./Users.css"
import { getUsersData } from "./Users"

function Users() {

    const [users, setUsers] = useState([]);
    return (
        <div className="users-container">
            <h1>Users Data</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo commodi magni quae aliquam illo eligendi placeat porro inventore, doloribus neque asperiores, amet hic iste repellat suscipit beatae praesentium? Dolorem distinctio cumque ab blanditiis? Ex repellat illo nemo quidem officia quia saepe reiciendis architecto recusandae obcaecati explicabo voluptates blanditiis dicta quas, exercitationem ea accusamus cumque esse alias quod sapiente. Amet error consequuntur voluptatibus eum atque accusantium, qui omnis quo magnam! Error culpa eos beatae quo animi mollitia natus accusantium quae obcaecati doloremque. Ipsum similique praesentium quas suscipit. Molestias asperiores ullam nostrum dolore nemo consequatur distinctio consequuntur laborum sed natus incidunt commodi eum atque quam, ut quis modi omnis unde! Alias veritatis corrupti molestias cumque, a cum atque sapiente ea eum, facere aperiam labore placeat rem sit, veniam repellat? Quae ipsam deserunt sequi vero fuga quod nam architecto tempora molestias soluta illum reprehenderit vel, dolores placeat repudiandae in accusantium officia optio. Consequuntur velit molestiae blanditiis quibusdam. Repellendus ad, aspernatur voluptate odio reiciendis saepe accusantium magni impedit maxime, recusandae harum optio, voluptatem provident voluptates asperiores ut error quas fuga quos fugiat! Delectus eos dolor obcaecati enim magni nesciunt ad fuga hic ducimus voluptatum placeat provident repellendus ipsa temporibus illo corrupti omnis, minima alias.</p>
            <button onClick={() => {
                getUsersData(setUsers);

            }}>Get Users</button>

            {users.length > 0 && (<div className="users-data">
                <table cellPadding={"20px"}>
                    <thead>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>City</th>
                    </thead>
                    <tbody>
                        {
                            users.map(function (user) {
                                return (
                                    <tr>
                                        <td>
                                            <img src={user.picture.medium} alt="" width={70} height={70} />
                                        </td>
                                        <td>
                                            {user.name.first}{user.name.last}
                                        </td>
                                        <td>
                                            {user.gender}
                                        </td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.location.city}
                                        </td>
                                    </tr>

                                )

                            })
                        }
                    </tbody>
                </table>
            </div>)}
        </div>

    )
}

export default Users;