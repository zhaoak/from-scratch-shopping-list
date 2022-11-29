const SUPABASE_URL = 'https://sagftzksyhlnwvwqislb.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZ2Z0emtzeWhsbnd2d3Fpc2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgxMzcsImV4cCI6MTk4MzY4NDEzN30.YKP0xHsE1Oo9sKmU0QIHWN5YTQFCCQYfW4p1zJ1iOtw';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

export function checkAuth() {
    // if user not logged in, redirect to auth page
    if (!getUser()) {
        location.replace('./auth/index.html');
    }
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        // location of list html page
        location.replace('../');
    }
}

/* Data functions */
export async function fetchList() {
    // fetch data
    const response = await client
        .from('arbitrary_item_list')
        .select()
        .order('marked')
        .match({ user_id: client.auth.user().id });

    // check for error, output to console if one occurs; otherwise, return data
    return checkError(response);
}

// for checking if response from DB has error
function checkError({ data, error }) {
    if (error) {
        return console.error(error);
    } else return data;
}
