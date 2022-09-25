
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setActiveFilter } from "../../actions";

const HeroesFilters = () => {
    const dispatch = useDispatch();
    const {filters} = useSelector(state => state);

    const setFilterAsActive = (e) => {
        dispatch(setActiveFilter(e.target.getAttribute('data-filter')));

        const btns = document.querySelectorAll('.btn-group .btn');
        btns.forEach(item => {
            item.classList.remove('active');
        })

        e.target.classList.add('active');
    }
    console.log('render');

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {
                        filters.map((item, i) => {
                            return(
                                <button data-filter={item.value} onClick={setFilterAsActive} key={i} className={item.className}>{item.name}</button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;