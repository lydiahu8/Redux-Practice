import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items.jsx';


class ItemList extends React.Component {
    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There's an error!</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);







// class ItemList extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             items: [],
//         };
//     }

//     componentDidMount() {
//         this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
//     }

//     fetchData(url) {
//         this.setState({ isLoading: true });

//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }

//                 this.setState({ isLoading: false });

//                 return response;
//             })
//             .then((response) => response.json())
//             .then((items) => this.setState({ items }))
//             .catch(() => this.setState({ hasErrored: true }));
//     }

//     render() {
//         if (this.state.hasErrored) {
//             return <p>Sorry! Lawrence ate too many weiners</p>;
//         }

//         if (this.state.isLoading) {
//             return <p>Loading…</p>;
//         }

//         return (
//             <ul>
//                 {this.state.items.map((item) => (
//                     <li key={item.id}>
//                         {item.label}
//                     </li>
//                 ))}
//             </ul>
//         );
//     }
// }

// export default ItemList;