// what is a callback function?
//  a callback function is a function that is passed to another function.

//  what is sync and async?
// sync stands for events occuring at the same time; line by line it is blocking, has to wait for exucution one at a time.

// aync means code events can occur at different times in no order.

function getUser(id, callback) {
    setTimeout(
        () => {
            console.log(`Reading user ID: ${id} from database...`);
            let user = {
                id: id,
                githubUserName: "darceymckelvey"
            };
            callback(user);
        }, 3000);
}

getUser(1, (user) => {
    console.log(user);
});

// promise
// a promise is an object that represents the eventual completion or failure of a async operation

// pending => fulfiled, or rejected
function getUserPromis(id) {
    return new Promise((resolve, reject)=>{
            setTimeout(() => {
            console.log(`Reading user ID: ${id} from database...`);
            let user = {
                id: id,
                githubUserName: "chucknorris"
            };

            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found.'));
            }
        }, 3000);
    })
}

getUserPromis(2).then(
    (user) => {
        console.log(user);
    }
).catch(
    (error) => {
    console.log(error);
    }
);