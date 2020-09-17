let newListFootball = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45
    },

    {
        name: "Chelsea",
        points: 75,
        GD: 39
    },

    {
        name: "Manchester United",
        points: 60,
        GD: 29
    },

    {
        name: "Liverpool",
        points: 88,
        GD: 39
    }
];
let listFootball=[]
for(let i=0;i<newListFootball.length;i++)
{
    listFootball[i]=newListFootball[i];
}
console.log(newListFootball)
// sắp xếp
for (let i = 0; i < listFootball.length - 1; i++) {
    for (let j = i + 1; j < listFootball.length; j++) {
        if (listFootball[i].points < listFootball[j].points) {
            let temp = listFootball[i];
            listFootball[i] = listFootball[j];
            listFootball[j] = temp;
        }
        else if (listFootball[i].points === listFootball[j].points) {
            if (listFootball[i].GD < listFootball[j].GD) {
                let temp = listFootball[i];
                listFootball[i] = listFootball[j];
                listFootball[j] = temp;
            }
            else if (listFootball[i].GD === listFootball[j].GD)
            {
                if (listFootball[i].name.toLowerCase().localeCompare(listFootball[j].name.toLowerCase()) > 0) {
                    let temp = listFootball[i];
                    listFootball[i] = listFootball[j];
                    listFootball[j] = temp;
                  }
            }
        }
    }
}
let n = 1;
//rank
for (let i = 0; i < listFootball.length; i++) {
    listFootball[i] = {
        name: listFootball[i].name,
        points: listFootball[i].points,
        GD: listFootball[i].GD,
        position: n,
    }
    n += 1;
}
for (let i = 0; i < newListFootball.length; i++) {
    for (let j = 0; j < listFootball.length; j++)
    {
        if (newListFootball[i].name === listFootball[j].name)
        {
            newListFootball[i]={
                name: listFootball[j].name,
                points: listFootball[j].points,
                GD: listFootball[j].GD,
                position: listFootball[j].position,
            }
        }
    }
}
//in ra
for (let i = 0; i < newListFootball.length; i++) {
    const football = newListFootball[i];
    console.log(i + 1);
    for (const key in football) {
        const value = football[key];
        console.log(key + " : " + value);
    }
    console.log("\t \t");
}