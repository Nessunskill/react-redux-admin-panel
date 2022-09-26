// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров
import { v4 as uuidv4 } from 'uuid';
import { useHttp } from '../../hooks/http.hook';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addHero, fetchFilters, myAction } from '../../actions';
import { useEffect } from 'react';

const HeroesAddForm = () => {
    const {request} = useHttp();
    const {filters} = useSelector(state => state.filtersReducer);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [element, setElement] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newHero = {
            id: uuidv4(),
            name,
            description,
            element
        }
        
        request('http://localhost:3001/heroes', 'POST', JSON.stringify(newHero))
            .then(dispatch(addHero(newHero)));
    }

    useEffect(() => {
            dispatch(fetchFilters(request))

            // eslint-disable-next-line
    }, []);

    return (
        <form onSubmit={onFormSubmit} className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    onChange={(e) => setElement(e.target.value)}
                    required
                    className="form-select" 
                    id="element" 
                    name="element">
                    <option label="Выберите элемент героя"></option>
                        {
                            filters.map((item, i) => {
                                // eslint-disable-next-line
                                if (i === 0) return
                                return(
                                    <option key={i} value={item.value}>{item.name}</option>
                                )
                            })
                        }
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;