import React, { useState } from 'react'
import { GithubApi } from '../../api/github/Client';
import Loader from '../../components/Loader/Loader';
import Paginate from '../../components/Pagination/Paginate';
import { Search } from '../../components/Search/Search';
import UserList from '../../components/UserList/UserList';
import { Helper } from '../../utils/utils';


function Home() {
    const [users,setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);

    const [paginateOptions, setPaginateOptions] = useState({
        perPage: 6,
        numberOfResults: null
    })

    function handleInputChange(searchTerm) {
        console.log(searchTerm)
        if(searchTerm !== '') {
            fetchGithubUsers(searchTerm);
        } else {
            setUsers([]);
        }
    }

    const optimizedSearch = Helper.debounce(handleInputChange);

    function fetchGithubUsers(searchTerm) {
        setIsLoading(true);
        GithubApi.fetchGithubUsers(searchTerm).then(res => {
            setUsers(res.items);
            setPaginateOptions({...paginateOptions, numberOfResults: res.items.length})
        })
        .catch((err) => {
            throw new Error(`${err.message}`);
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    function onPageChange(page) {
        setActivePage(page);
    }

    function paginateUsers() {
        if(users && users.length > 0) {
            const perPage = paginateOptions.perPage;
            return users.slice(perPage * activePage, (perPage * activePage) + perPage)
        }
    }

    return (
        <div className='home'>
            <Search handleInputChange={(e) => optimizedSearch(e.target.value)}/>
            { users && users.length > 0 && <Paginate paginateOptions = {paginateOptions} pageChange={onPageChange}/>}
            {isLoading ? <Loader /> : <UserList users={paginateUsers()}/>}
        </div>
    )
}

export default Home