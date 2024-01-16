import React, { Component } from "react";
import { BackHandler, FlatList, LogBox, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { usersdata } from "../../constants/dummydata";

interface Users {
    users: any[],
    searchText: any,
    RepliUsers: any[],
    selectedArray: any[],
}

class HelpnSupport extends Component<{ navigation: any }, Users>{
    constructor(props: any) {

        super(props);
        this.state = {
            users: [
                {
                    "name": "John Doe",
                    "username": "john_doe",
                    "address": "123 Main St, Cityville, USA",
                    "dob": "1990-05-15",
                    "gender": "Male"
                },
                {
                    "name": "Jane Smith",
                    "username": "jane_smith",
                    "address": "456 Oak Ave, Townsville, USA",
                    "dob": "1985-08-22",
                    "gender": "Female"
                },

                {
                    "name": "Alice Johnson",
                    "username": "alice_j",
                    "address": "789 Pine Rd, Villagetown, USA",
                    "dob": "1993-11-10",
                    "gender": "Female"
                },
                {
                    "name": "Bob Johnson",
                    "username": "bob_j",
                    "address": "789 Pine Rd, Villagetown, USA",
                    "dob": "1993-11-10",
                    "gender": "Male"
                },
                {
                    "name": "Emily White",
                    "username": "emily_white",
                    "address": "567 Elm Blvd, Hamletville, USA",
                    "dob": "1988-03-27",
                    "gender": "Female"
                },
                {
                    "name": "Michael Brown",
                    "username": "michael_b",
                    "address": "101 Maple Ln, Riverside, USA",
                    "dob": "1995-07-04",
                    "gender": "Male"
                },
                {
                    "name": "Amanda Davis",
                    "username": "amanda_d",
                    "address": "222 Birch St, Hillside, USA",
                    "dob": "1992-09-18",
                    "gender": "Female"
                },
                {
                    "name": "Alex Wilson",
                    "username": "alex_w",
                    "address": "333 Pineapple Dr, Beachtown, USA",
                    "dob": "1989-12-05",
                    "gender": "Non-Binary"
                },
                {
                    "name": "Chris Miller",
                    "username": "chris_m",
                    "address": "444 Oakwood Ave, Groveton, USA",
                    "dob": "1991-02-14",
                    "gender": "Male"
                },
                {
                    "name": "Sophia Lopez",
                    "username": "sophia_l",
                    "address": "555 Willow Rd, Meadowville, USA",
                    "dob": "1987-06-30",
                    "gender": "Female"
                },
                {
                    "name": "Daniel Carter",
                    "username": "daniel_c",
                    "address": "666 Cedar St, Hilltop, USA",
                    "dob": "1994-04-08",
                    "gender": "Male"
                },
                {
                    "name": "Olivia Adams",
                    "username": "olivia_a",
                    "address": "777 Birchwood Ln, Valley City, USA",
                    "dob": "1986-10-12",
                    "gender": "Female"
                },
                {
                    "name": "Ethan Taylor",
                    "username": "ethan_t",
                    "address": "888 Maple Ave, Rivertown, USA",
                    "dob": "1998-01-25",
                    "gender": "Male"
                },
                {
                    "name": "Mia Clark",
                    "username": "mia_c",
                    "address": "999 Oakhill Rd, Hillcrest, USA",
                    "dob": "1997-03-19",
                    "gender": "Female"
                },
                {
                    "name": "Lucas Martinez",
                    "username": "lucas_m",
                    "address": "111 Cedarwood Dr, Woodland, USA",
                    "dob": "1996-09-03",
                    "gender": "Male"
                },
                {
                    "name": "Avery Turner",
                    "username": "avery_t",
                    "address": "222 Willow Ln, Greenvale, USA",
                    "dob": "1992-05-08",
                    "gender": "Non-Binary"
                },
                {
                    "name": "Lily Hernandez",
                    "username": "lily_h",
                    "address": "333 Pinecrest Blvd, Lakeside, USA",
                    "dob": "1984-12-17",
                    "gender": "Female"
                },
                {
                    "name": "Henry Scott",
                    "username": "henry_s",
                    "address": "444 Elmwood Rd, Hilltop, USA",
                    "dob": "1989-07-21",
                    "gender": "Male"
                },
                {
                    "name": "Chloe Adams",
                    "username": "chloe_a",
                    "address": "555 Birchwood Ln, Rivertown, USA",
                    "dob": "1993-04-14",
                    "gender": "Female"
                },
                {
                    "name": "Jackson Moore",
                    "username": "jackson_m",
                    "address": "666 Oakhill Dr, Meadowville, USA",
                    "dob": "1990-11-28",
                    "gender": "Male"
                },
                {
                    "name": "Aria Lopez",
                    "username": "aria_l",
                    "address": "777 Pinecrest Ave, Sunset City, USA",
                    "dob": "1986-06-02",
                    "gender": "Female"
                },
                {
                    "name": "Sophie Turner",
                    "username": "sophie_t",
                    "address": "888 Cedarwood Rd, Lakeside, USA",
                    "dob": "1995-02-09",
                    "gender": "Female"
                },
                {
                    "name": "David Rodriguez",
                    "username": "david_r",
                    "address": "999 Maplewood Ln, Hillcrest, USA",
                    "dob": "1994-08-14",
                    "gender": "Male"
                },
                {
                    "name": "Emma Harris",
                    "username": "emma_h",
                    "address": "123 Oakridge Blvd, Rivertown, USA",
                    "dob": "1988-05-30",
                    "gender": "Female"
                },
                {
                    "name": "Nathan Powell",
                    "username": "nathan_p",
                    "address": "456 Pinehurst Dr, Meadowville, USA",
                    "dob": "1991-12-03",
                    "gender": "Male"
                },
                {
                    "name": "Isabella Walker",
                    "username": "isabella_w",
                    "address": "789 Elmwood Ave, Cityville, USA",
                    "dob": "1987-10-18",
                    "gender": "Female"
                },
                {
                    "name": "Elijah Turner",
                    "username": "elijah_t",
                    "address": "111 Pine Ln, Hillcrest, USA",
                    "dob": "1993-06-12",
                    "gender": "Male"
                },
                {
                    "name": "Scarlett Garcia",
                    "username": "scarlett_g",
                    "address": "222 Oakwood Rd, Meadowville, USA",
                    "dob": "1989-09-25",
                    "gender": "Female"
                },
                {
                    "name": "Mason Robinson",
                    "username": "mason_r",
                    "address": "333 Elmwood Ave, Rivertown, USA",
                    "dob": "1995-03-08",
                    "gender": "Male"
                },
                {
                    "name": "Abigail Martin",
                    "username": "abigail_m",
                    "address": "444 Cedar St, Cityville, USA",
                    "dob": "1990-11-15",
                    "gender": "Female"
                },
                {
                    "name": "Jameson Baker",
                    "username": "jameson_b",
                    "address": "555 Birchwood Blvd, Sunset City, USA",
                    "dob": "1998-04-30",
                    "gender": "Male"
                },
                {
                    "name": "Hazel Reed",
                    "username": "hazel_r",
                    "address": "666 Willow Rd, Lakeside, USA",
                    "dob": "1986-07-22",
                    "gender": "Female"
                },
                {
                    "name": "Ethan Turner",
                    "username": "ethan_turner",
                    "address": "777 Oakhill Ave, Beachtown, USA",
                    "dob": "1992-02-18",
                    "gender": "Male"
                },
                {
                    "name": "Aria Foster",
                    "username": "aria_f",
                    "address": "888 Pinecrest Dr, Hilltop, USA",
                    "dob": "1984-10-05",
                    "gender": "Female"
                },
                {
                    "name": "Noah Sullivan",
                    "username": "noah_s",
                    "address": "999 Maplewood Rd, Valley City, USA",
                    "dob": "1997-08-11",
                    "gender": "Male"
                },
                {
                    "name": "Amelia Parker",
                    "username": "amelia_p",
                    "address": "123 Birch Ln, Villagetown, USA",
                    "dob": "1994-01-19",
                    "gender": "Female"
                },
                {
                    "name": "Caleb Mitchell",
                    "username": "caleb_m",
                    "address": "111 Oakridge Ave, Cityville, USA",
                    "dob": "1992-05-28",
                    "gender": "Male"
                },
                {
                    "name": "Aurora Torres",
                    "username": "aurora_t",
                    "address": "222 Cedarwood Rd, Hillcrest, USA",
                    "dob": "1988-12-15",
                    "gender": "Female"
                },
                {
                    "name": "Jackson Sullivan",
                    "username": "jackson_s",
                    "address": "333 Pine Blvd, Meadowville, USA",
                    "dob": "1996-02-10",
                    "gender": "Male"
                },
                {
                    "name": "Stella Ward",
                    "username": "stella_w",
                    "address": "444 Willow Ave, Sunset City, USA",
                    "dob": "1989-09-05",
                    "gender": "Female"
                },
                {
                    "name": "Logan Martinez",
                    "username": "logan_m",
                    "address": "555 Birchwood Blvd, Riverside, USA",
                    "dob": "1994-07-18",
                    "gender": "Male"
                },
                {
                    "name": "Scarlett Lopez",
                    "username": "scarlett_l",
                    "address": "666 Pinecrest Ln, Greenvale, USA",
                    "dob": "1985-04-22",
                    "gender": "Female"
                },
                {
                    "name": "Grayson Turner",
                    "username": "grayson_t",
                    "address": "777 Elmwood Dr, Hilltop, USA",
                    "dob": "1991-11-03",
                    "gender": "Male"
                },
                {
                    "name": "Penelope Adams",
                    "username": "penelope_a",
                    "address": "888 Oakhill Blvd, Villagetown, USA",
                    "dob": "1987-08-28",
                    "gender": "Female"
                },
                {
                    "name": "Wyatt Harris",
                    "username": "wyatt_h",
                    "address": "999 Cedarwood Rd, Lakeside, USA",
                    "dob": "1990-06-14",
                    "gender": "Male"
                },
                {
                    "name": "Violet Garcia",
                    "username": "violet_g",
                    "address": "123 Maple Ln, Beachtown, USA",
                    "dob": "1986-01-29",
                    "gender": "Female"
                },
                {
                    "name": "Owen Baker",
                    "username": "owen_b",
                    "address": "234 Pinecrest Ave, Valley City, USA",
                    "dob": "1998-03-04",
                    "gender": "Male"
                },
                {
                    "name": "Athena Mitchell",
                    "username": "athena_m",
                    "address": "345 Willow Rd, Rivertown, USA",
                    "dob": "1993-10-19",
                    "gender": "Female"
                },
                {
                    "name": "Ezra Turner",
                    "username": "ezra_t",
                    "address": "456 Elm Blvd, Hillside, USA",
                    "dob": "1984-07-12",
                    "gender": "Male"
                },
                {
                    "name": "Aria Scott",
                    "username": "aria_s",
                    "address": "567 Oakwood Ave, Hamletville, USA",
                    "dob": "1989-04-05",
                    "gender": "Female"
                },
                {
                    "name": "Eli Davis",
                    "username": "eli_d",
                    "address": "678 Pine Rd, Meadowville, USA",
                    "dob": "1995-09-30",
                    "gender": "Male"
                },
                {
                    "name": "Luna Reed",
                    "username": "luna_r",
                    "address": "789 Cedarwood Ln, Woodland, USA",
                    "dob": "1992-04-13",
                    "gender": "Female"
                },
                {
                    "name": "Miles Turner",
                    "username": "miles_t",
                    "address": "890 Birchwood Dr, Sunset City, USA",
                    "dob": "1987-11-26",
                    "gender": "Male"
                },
                {
                    "name": "Bella Foster",
                    "username": "bella_f",
                    "address": "901 Willow Ave, Villagetown, USA",
                    "dob": "1996-06-09",
                    "gender": "Female"
                },
                {
                    "name": "Lucas Adams",
                    "username": "lucas_a",
                    "address": "112 Elmwood Rd, Riverside, USA",
                    "dob": "1994-02-21",
                    "gender": "Male"
                },
                {
                    "name": "Harper Turner",
                    "username": "harper_t",
                    "address": "111 Pinecrest Blvd, Meadowville, USA",
                    "dob": "1992-08-17",
                    "gender": "Female"
                },
                {
                    "name": "Zachary Reed",
                    "username": "zachary_r",
                    "address": "222 Elmwood Ln, Valley City, USA",
                    "dob": "1988-01-24",
                    "gender": "Male"
                },
                {
                    "name": "Mila Baker",
                    "username": "mila_b",
                    "address": "333 Oakridge Rd, Hillcrest, USA",
                    "dob": "1996-04-09",
                    "gender": "Female"
                },
                {
                    "name": "Carter Martinez",
                    "username": "carter_m",
                    "address": "444 Pine Blvd, Beachtown, USA",
                    "dob": "1991-10-03",
                    "gender": "Male"
                },
                {
                    "name": "Avery Turner",
                    "username": "avery_t",
                    "address": "555 Willow Ave, Villagetown, USA",
                    "dob": "1989-05-18",
                    "gender": "Non-Binary"
                },
                {
                    "name": "Leo Harris",
                    "username": "leo_h",
                    "address": "666 Pinecrest Dr, Cityville, USA",
                    "dob": "1998-02-27",
                    "gender": "Male"
                },
                {
                    "name": "Layla Garcia",
                    "username": "layla_g",
                    "address": "777 Cedar St, Hamletville, USA",
                    "dob": "1985-09-22",
                    "gender": "Female"
                },
                {
                    "name": "Owen Turner",
                    "username": "owen_t",
                    "address": "888 Oakwood Ln, Sunset City, USA",
                    "dob": "1993-06-14",
                    "gender": "Male"
                },
                {
                    "name": "Emma Robinson",
                    "username": "emma_r",
                    "address": "999 Pine Rd, Meadowville, USA",
                    "dob": "1990-11-30",
                    "gender": "Female"
                },
                {
                    "name": "Henry Turner",
                    "username": "henry_t",
                    "address": "123 Cedarwood Blvd, Greenvale, USA",
                    "dob": "1986-03-13",
                    "gender": "Male"
                },
                {
                    "name": "Aria Davis",
                    "username": "aria_d",
                    "address": "234 Oakhill Ave, Woodland, USA",
                    "dob": "1997-12-08",
                    "gender": "Female"
                },
                {
                    "name": "Elijah Mitchell",
                    "username": "elijah_m",
                    "address": "345 Birchwood Rd, Riverside, USA",
                    "dob": "1984-08-25",
                    "gender": "Male"
                },
                {
                    "name": "Lily Turner",
                    "username": "lily_t",
                    "address": "456 Elmwood Dr, Hilltop, USA",
                    "dob": "1989-04-11",
                    "gender": "Female"
                },
                {
                    "name": "Cameron Foster",
                    "username": "cameron_f",
                    "address": "567 Maple Ln, Villagetown, USA",
                    "dob": "1994-01-26",
                    "gender": "Male"
                },
                {
                    "name": "Sophie Adams",
                    "username": "sophie_a",
                    "address": "678 Pinecrest Ave, Lakeside, USA",
                    "dob": "1987-07-19",
                    "gender": "Female"
                },
                {
                    "name": "Mason Turner",
                    "username": "mason_t",
                    "address": "789 Oakwood Blvd, Rivertown, USA",
                    "dob": "1992-02-04",
                    "gender": "Male"
                },
                {
                    "name": "Aurora Scott",
                    "username": "aurora_s",
                    "address": "890 Willow Rd, Hillcrest, USA",
                    "dob": "1986-09-09",
                    "gender": "Female"
                },
                {
                    "name": "Logan Mitchell",
                    "username": "logan_m",
                    "address": "901 Cedarwood Ave, Valley City, USA",
                    "dob": "1995-04-24",
                    "gender": "Male"
                },
                {
                    "name": "Luna Harris",
                    "username": "luna_h",
                    "address": "112 Pinecrest Dr, Meadowville, USA",
                    "dob": "1991-11-17",
                    "gender": "Female"
                },
                {
                    "name": "Ethan Baker",
                    "username": "ethan_b",
                    "address": "223 Oakridge Blvd, Hamletville, USA",
                    "dob": "1988-06-22",
                    "gender": "Male"
                },
                {
                    "name": "Chloe Turner",
                    "username": "chloe_t",
                    "address": "334 Elmwood Rd, Sunset City, USA",
                    "dob": "1993-03-06",
                    "gender": "Female"
                },
                {
                    "name": "Oscar Rodriguez",
                    "username": "oscar_r",
                    "address": "445 Willow Ave, Greenvale, USA",
                    "dob": "1996-08-01",
                    "gender": "Male"
                },
                {
                    "name": "Ava Turner",
                    "username": "ava_t",
                    "address": "556 Pinecrest Ln, Beachtown, USA",
                    "dob": "1994-05-14",
                    "gender": "Female"
                },
                {
                    "name": "Liam Davis",
                    "username": "liam_d",
                    "address": "667 Birchwood Blvd, Hilltop, USA",
                    "dob": "1985-12-28",
                    "gender": "Male"
                },
                {
                    "name": "Penelope Turner",
                    "username": "penelope_t",
                    "address": "778 Oakhill Dr, Cityville, USA",
                    "dob": "1990-07-03",
                    "gender": "Female"
                },
                {
                    "name": "Mason Robinson",
                    "username": "mason_r",
                    "address": "889 Willow Rd, Meadowville, USA",
                    "dob": "1987-02-16",
                    "gender": "Male"
                },
                {
                    "name": "Ella Turner",
                    "username": "ella_t",
                    "address": "111 Cedarwood Dr, Hilltop, USA",
                    "dob": "1993-02-12",
                    "gender": "Female"
                },
                {
                    "name": "Miles Baker",
                    "username": "miles_b",
                    "address": "222 Pinecrest Rd, Valley City, USA",
                    "dob": "1989-05-25",
                    "gender": "Male"
                },
                {
                    "name": "Scarlett Turner",
                    "username": "scarlett_t",
                    "address": "333 Oakhill Blvd, Lakeside, USA",
                    "dob": "1996-10-18",
                    "gender": "Female"
                },
                {
                    "name": "Sebastian Harris",
                    "username": "sebastian_h",
                    "address": "444 Elm Blvd, Beachtown, USA",
                    "dob": "1991-03-04",
                    "gender": "Male"
                },
                {
                    "name": "Ava Robinson",
                    "username": "ava_r",
                    "address": "555 Pine Rd, Villagetown, USA",
                    "dob": "1986-12-09",
                    "gender": "Female"
                },
                {
                    "name": "Oliver Turner",
                    "username": "oliver_t",
                    "address": "666 Willow Ave, Cityville, USA",
                    "dob": "1998-07-24",
                    "gender": "Male"
                },
                {
                    "name": "Grace Garcia",
                    "username": "grace_g",
                    "address": "777 Cedarwood Ln, Hamletville, USA",
                    "dob": "1985-10-17",
                    "gender": "Female"
                },
                {
                    "name": "Liam Turner",
                    "username": "liam_t",
                    "address": "888 Pinecrest Dr, Sunset City, USA",
                    "dob": "1993-05-14",
                    "gender": "Male"
                },
                {
                    "name": "Hazel Robinson",
                    "username": "hazel_r",
                    "address": "999 Elmwood Rd, Meadowville, USA",
                    "dob": "1990-12-29",
                    "gender": "Female"
                },
                {
                    "name": "Ethan Harris",
                    "username": "ethan_h",
                    "address": "123 Oakwood Ave, Woodland, USA",
                    "dob": "1986-03-04",
                    "gender": "Male"
                },
                {
                    "name": "Aria Foster",
                    "username": "aria_f",
                    "address": "234 Willow Rd, Riverside, USA",
                    "dob": "1997-10-19",
                    "gender": "Female"
                },
                {
                    "name": "Caleb Turner",
                    "username": "caleb_t",
                    "address": "345 Cedarwood Blvd, Hillcrest, USA",
                    "dob": "1984-07-12",
                    "gender": "Male"
                },
                {
                    "name": "Stella Davis",
                    "username": "stella_d",
                    "address": "456 Pinecrest Ave, Sunset City, USA",
                    "dob": "1989-04-05",
                    "gender": "Female"
                },
                {
                    "name": "Isaac Robinson",
                    "username": "isaac_r",
                    "address": "567 Cedar St, Beachtown, USA",
                    "dob": "1994-09-30",
                    "gender": "Male"
                },
                {
                    "name": "Chloe Turner",
                    "username": "chloe_t",
                    "address": "678 Oakhill Dr, Hilltop, USA",
                    "dob": "1988-04-13",
                    "gender": "Female"
                },
                {
                    "name": "Benjamin Baker",
                    "username": "benjamin_b",
                    "address": "789 Elmwood Rd, Cityville, USA",
                    "dob": "1995-02-21",
                    "gender": "Male"
                },
                {
                    "name": "Lily Harris",
                    "username": "lily_h",
                    "address": "890 Pinecrest Ln, Meadowville, USA",
                    "dob": "1992-07-06",
                    "gender": "Female"
                },
                {
                    "name": "Jackson Turner",
                    "username": "jackson_t",
                    "address": "901 Cedarwood Rd, Valley City, USA",
                    "dob": "1987-12-01",
                    "gender": "Male"
                },
                {
                    "name": "Violet Foster",
                    "username": "violet_f",
                    "address": "112 Birchwood Ave, Greenvale, USA",
                    "dob": "1991-09-26",
                    "gender": "Female"
                },
                {
                    "name": "Liam Rodriguez",
                    "username": "liam_r",
                    "address": "223 Willow Rd, Lakeside, USA",
                    "dob": "1985-04-11",
                    "gender": "Male"
                },
                {
                    "name": "Aurora Turner",
                    "username": "aurora_t",
                    "address": "334 Cedarwood Blvd, Rivertown, USA",
                    "dob": "1994-09-02",
                    "gender": "Female"
                },
                {
                    "name": "Carter Harris",
                    "username": "carter_h",
                    "address": "445 Oakhill Dr, Hillcrest, USA",
                    "dob": "1989-05-18",
                    "gender": "Male"
                },
                {
                    "name": "Sophie Turner",
                    "username": "sophie_t",
                    "address": "556 Pinecrest Dr, Beachtown, USA",
                    "dob": "1996-10-27",
                    "gender": "Female"
                },
                {
                    "name": "Mason Davis",
                    "username": "mason_d",
                    "address": "667 Cedar St, Sunset City, USA",
                    "dob": "1993-03-15",
                    "gender": "Male"
                },
                {
                    "name": "Aria Mitchell",
                    "username": "aria_m",
                    "address": "778 Elm Blvd, Villagetown, USA",
                    "dob": "1988-10-08",
                    "gender": "Female"
                },
                {
                    "name": "Owen Turner",
                    "username": "owen_t",
                    "address": "889 Pine Rd, Meadowville, USA",
                    "dob": "1995-05-24",
                    "gender": "Male"
                },
                {
                    "name": "Ava Mitchell",
                    "username": "ava_m",
                    "address": "111 Pinecrest Blvd, Beachtown, USA",
                    "dob": "1992-10-17",
                    "gender": "Female"
                },
                {
                    "name": "Cameron Turner",
                    "username": "cameron_t",
                    "address": "222 Willow Ave, Hilltop, USA",
                    "dob": "1989-03-04",
                    "gender": "Male"
                },
                {
                    "name": "Evelyn Robinson",
                    "username": "evelyn_r",
                    "address": "333 Oakwood Rd, Cityville, USA",
                    "dob": "1996-12-09",
                    "gender": "Female"
                },
                {
                    "name": "Landon Harris",
                    "username": "landon_h",
                    "address": "444 Cedar St, Sunset City, USA",
                    "dob": "1991-07-24",
                    "gender": "Male"
                },
                {
                    "name": "Grace Turner",
                    "username": "grace_t",
                    "address": "555 Elm Blvd, Villagetown, USA",
                    "dob": "1986-02-17",
                    "gender": "Female"
                },
                {
                    "name": "Nolan Davis",
                    "username": "nolan_d",
                    "address": "666 Pine Rd, Meadowville, USA",
                    "dob": "1998-09-24",
                    "gender": "Male"
                },
                {
                    "name": "Zoe Turner",
                    "username": "zoe_t",
                    "address": "777 Willow Rd, Rivertown, USA",
                    "dob": "1985-04-12",
                    "gender": "Female"
                },
                {
                    "name": "Eli Foster",
                    "username": "eli_f",
                    "address": "888 Oakhill Dr, Lakeside, USA",
                    "dob": "1993-11-14",
                    "gender": "Male"
                },
                {
                    "name": "Layla Robinson",
                    "username": "layla_r",
                    "address": "999 Birchwood Ave, Hamletville, USA",
                    "dob": "1990-06-29",
                    "gender": "Female"
                },
                {
                    "name": "Oscar Turner",
                    "username": "oscar_t",
                    "address": "123 Cedarwood Blvd, Woodland, USA",
                    "dob": "1986-01-04",
                    "gender": "Male"
                },
                {
                    "name": "Aria Harris",
                    "username": "aria_h",
                    "address": "234 Pinecrest Dr, Riverside, USA",
                    "dob": "1997-08-19",
                    "gender": "Female"
                },
                {
                    "name": "Ethan Mitchell",
                    "username": "ethan_m",
                    "address": "345 Elmwood Rd, Hillcrest, USA",
                    "dob": "1984-09-25",
                    "gender": "Male"
                },
                {
                    "name": "Luna Turner",
                    "username": "luna_t",
                    "address": "456 Willow Ave, Valley City, USA",
                    "dob": "1989-04-11",
                    "gender": "Female"
                },
                {
                    "name": "Mason Harris",
                    "username": "mason_h",
                    "address": "567 Cedarwood Ln, Meadowville, USA",
                    "dob": "1994-01-26",
                    "gender": "Male"
                },
                {
                    "name": "Scarlett Davis",
                    "username": "scarlett_d",
                    "address": "678 Pine Rd, Cityville, USA",
                    "dob": "1987-07-19",
                    "gender": "Female"
                },
                {
                    "name": "Lucas Turner",
                    "username": "lucas_t",
                    "address": "789 Oakwood Dr, Hilltop, USA",
                    "dob": "1992-02-04",
                    "gender": "Male"
                },
                {
                    "name": "Aurora Harris",
                    "username": "aurora_h",
                    "address": "890 Willow Rd, Greenvale, USA",
                    "dob": "1986-09-09",
                    "gender": "Female"
                },
                {
                    "name": "Miles Robinson",
                    "username": "miles_r",
                    "address": "901 Cedarwood Ave, Villagetown, USA",
                    "dob": "1995-04-24",
                    "gender": "Male"
                },
                {
                    "name": "Violet Turner",
                    "username": "violet_t",
                    "address": "112 Pinecrest Dr, Sunset City, USA",
                    "dob": "1991-11-17",
                    "gender": "Female"
                },
                {
                    "name": "Elijah Harris",
                    "username": "elijah_h",
                    "address": "223 Willow Rd, Lakeside, USA",
                    "dob": "1988-06-22",
                    "gender": "Male"
                },
                {
                    "name": "Zara Turner",
                    "username": "zara_t",
                    "address": "334 Cedarwood Blvd, Hillcrest, USA",
                    "dob": "1984-07-12",
                    "gender": "Female"
                },
                {
                    "name": "Leo Foster",
                    "username": "leo_f",
                    "address": "445 Elmwood Ave, Rivertown, USA",
                    "dob": "1996-08-01",
                    "gender": "Male"
                },
                {
                    "name": "Stella Robinson",
                    "username": "stella_r",
                    "address": "556 Oakhill Dr, Sunset City, USA",
                    "dob": "1994-05-14",
                    "gender": "Female"
                },
                {
                    "name": "Logan Turner",
                    "username": "logan_t",
                    "address": "667 Birchwood Blvd, Greenvale, USA",
                    "dob": "1985-12-28",
                    "gender": "Male"
                },
                {
                    "name": "Eva Harris",
                    "username": "eva_h",
                    "address": "778 Cedarwood Rd, Lakeside, USA",
                    "dob": "1990-07-03",
                    "gender": "Female"
                },
                {
                    "name": "Jack Turner",
                    "username": "jack_t",
                    "address": "889 Pinecrest Ave, Meadowville, USA",
                    "dob": "1987-02-16",
                    "gender": "Male"
                },
                {
                    "name": "Sophia Foster",
                    "username": "sophia_f",
                    "address": "990 Oakhill Dr, Hamletville, USA",
                    "dob": "1991-09-26",
                    "gender": "Female"
                },
                {
                    "name": "Max Turner",
                    "username": "max_t",
                    "address": "112 Birchwood Ave, Hilltop, USA",
                    "dob": "1995-05-24",
                    "gender": "Male"
                },
            ],
            RepliUsers: [],
            searchText: '',
            selectedArray: []
        }
    }

    componentDidMount(): void {
        // this.setState({ RepliUsers: [...this.state.users] })
        LogBox.ignoreAllLogs()
        BackHandler.addEventListener('hardwareBackPress', this.handleback)

    }

    handleback = () => {
        this.props.navigation.goBack()
        this.setState({ selectedArray: [] })
        return true
    }



    searchHandler = (text: string) => {
        console.log("Texxxxxttttttttttttttttttttttttttttttttttttttt---------------------------------->>>>>>>>", text);

        if (text !== "") {
            console.log("in if condition>>>>", text);

            const filteredUsers = this.state.users.filter((userItem: any) => {
                // return userItem.name.includes(text)
                let re = new RegExp(`${text}`, 'gi');
                return userItem.name.match(re)
            });

            this.setState({ RepliUsers: filteredUsers, searchText: text });
            setTimeout(() => {

                // console.log("RepliUsers_____________________________>>>>>>>>>>>>", this.state.RepliUsers);
            }, 500);
        } else {
            this.setState({ searchText: "", RepliUsers: this.state.users });
        }
    }

    renderUserItem = ({ item }: any) => {
        // console.log('Render User Item-----------------', item);

        return (
            <View style={{ marginVertical: 10 }}>
                <TouchableOpacity onPress={() => {
                    console.log("Touchable Render Item===================================>>>>", item.name)
                    let Name = item.name;
                    const updatedRepliUsers = this.state.RepliUsers.filter((userItem) => userItem.name !== Name);
                    this.setState({ RepliUsers: updatedRepliUsers });
                    this.setState((prevState) => ({
                        selectedArray: [...prevState.selectedArray, Name,],
                    }));
                }}>
                    <Text style={{ color: '#000' }}>{item.name}</Text>
                </TouchableOpacity>
            </View >
        )
    };

    renderEmptyList = () => (
        this.state.users.map((item) => {
            return <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: '#000' }}>{item.name}</Text>
            </View>
        })

    );


    render() {
        // console.log("logggggggggggggggggggggggggggggggggggggggggggggggggggg", this.state.users);
        console.log("Selected ARRAY-------------", this.state.selectedArray);

        return (
            <View style={{ flex: 1, marginTop: hp(2), marginHorizontal: wp(5) }}>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Ratings', {
                        UsersListData: this.state.selectedArray
                    }
                    )
                }} style={{ backgroundColor: '#008', width: wp(25), alignSelf: 'flex-end', marginBottom: hp(1) }}>
                    <Text style={{ color: '#fff', textAlign: 'center', padding: wp(3) }}>Proceed</Text>
                </TouchableOpacity>

                <TextInput
                    // value={this.state.selectedArray.length > 0 ? this.state.searchText && this.state.selectedArray.map((users) => { return users.name }) : this.state.searchText}
                    value={this.state.searchText}
                    style={{ borderColor: '#757575', borderWidth: 1, color: '#000', paddingHorizontal: wp(5), fontSize: 18 }}
                    placeholder={'Search Users...'}
                    placeholderTextColor={'#ccc'}
                    onChangeText={(text) => { this.searchHandler(text) }}
                />
                {this.state.selectedArray.length > 0 &&
                    <View style={{}}>
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>Selected Users</Text>
                        {this.state.selectedArray.map((user, index) => {
                            console.log("users", user);
                            return (
                                <Text key={index} style={{ color: '#087' }}> ~ {user} </Text>
                            );
                        })}
                    </View>
                }
                <FlatList
                    style={{ flex: 1, marginBottom: hp(15) }}
                    data={this.state.RepliUsers}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => this.renderUserItem(item)}
                // ListEmptyComponent={this.renderEmptyList}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default HelpnSupport;