import React from 'react'
import CollectionPreview from '../collection-preview/collection-preview'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';
import {selectCollectionsForPreview} from '../../redux/shop/shop.Selector'

const CollectionsOverview = ({collections}) => (
    <div className="collection-overview">
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect (mapStateToProps)(CollectionsOverview)
