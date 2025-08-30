import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../../redux/selectors'
import { changeFilter } from '../../redux/filtersSlice'
import css from './SearchBox.module.css'

const SearchBox = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)

    const handleChange = e => {
        dispatch(changeFilter(e.target.value))
    }

    return (
        <div className={css.wrapper}>
            <label className={css.label}>Find contacts by name</label>
            <input
                className={css.input}
                type="text"
                value={filter}
                onChange={handleChange}
                placeholder="Search..."
            />
        </div>
    )
}

export default SearchBox
