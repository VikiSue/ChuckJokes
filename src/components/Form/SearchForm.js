import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { InputField, RadioInputField } from './InputFilds';
import { getCategories } from '../../redux/actions/getCategories';
import Loader from '../Loader';
import { useSearchForm } from './useSearchForm';
import { textLength } from '../../services/validators';

const SearchForm = props => {
    const {
        searchType,
        onSearchTypeChange,
        handleRadioQuery,
        handleTextQuery,
        dbtDisabled,
    } = useSearchForm(props.getCategories);

    return (
        <form onSubmit={props.handleSubmit} className="form">
            <div className="form__group">
                <label className="form__label">
                    <div className="form__line">
                        <Field
                            component={RadioInputField}
                            name="searchType"
                            type="radio"
                            value="random"
                            onChange={onSearchTypeChange}
                        />
                        <span> Random</span>
                    </div>
                </label>
            </div>
            {/*   CATEGORIES*/}
            <div className="form__group">
                <label
                    className={
                        searchType === 'byCategory'
                            ? 'form__label form__label--shown'
                            : 'form__label'
                    }
                >
                    <div className="form__line">
                        {' '}
                        <Field
                            component={RadioInputField}
                            name="searchType"
                            type="radio"
                            value="byCategory"
                            onChange={onSearchTypeChange}
                        />
                        <span>From categories</span>
                    </div>
                    <div
                        className={
                            searchType === 'byCategory'
                                ? 'categories__slide '
                                : ' categories__slide--hidden'
                        }
                    >
                        <div className="categories__list">
                            {props.categories.map(item => (
                                <label key={item} className="categories__label">
                                    <Field
                                        onChange={handleRadioQuery}
                                        component={RadioInputField}
                                        name="category"
                                        type="radio"
                                        value={item}
                                        radioClass="categories__input"
                                    />
                                    <p className="categories__text">{item}</p>
                                </label>
                            ))}
                        </div>
                    </div>
                </label>
            </div>
            {/*   SEARCH INPUT*/}
            <div className="form__group">
                <label className="form__inputGroup">
                    <div className="form__line">
                        <Field
                            component={RadioInputField}
                            name="searchType"
                            type="radio"
                            value="byText"
                            data="byText"
                            onChange={onSearchTypeChange}
                        />
                        <span>Search</span>
                    </div>
                    <div
                        className={
                            searchType === 'byText'
                                ? 'categories__slide'
                                : 'categories__slide categories__slide--hidden'
                        }
                    >
                        <Field
                            component={InputField}
                            placeholder="Free text search..."
                            name="textField"
                            type="text"
                            onChange={handleTextQuery}
                            validate={searchType === 'byText' ? [textLength] : null}
                        />
                    </div>
                </label>
            </div>

            {props.isLoading ? (
                <Loader />
            ) : (
                <button
                    type="submit"
                    className="form__btn"
                    disabled={dbtDisabled}
                >
                    Get a joke
                </button>
            )}
        </form>
    );
};

const SearchFormRedux = reduxForm({ form: 'search' })(SearchForm);

const SearchFormContainer = connect(
    state => ({
        categories: state.searchForm.categories,
        isLoading: state.searchForm.isLoading,
    }),
    { getCategories }
)(SearchFormRedux);
export default SearchFormContainer;
