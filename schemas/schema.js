// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import multilingualTitle from './multilingualTitle';
import multilingualDescription from './multilingualDescription';
import seo from './seo';
import country from './country';
import company from './company';
import jobCategory from './jobCategory';
import jobPost from './jobPost';
import language from './language';
import visaRequirement from './visaRequirement';
import skillShortages from './skillShortages';
import accreditation from './accreditation';
import page from './page';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    country,
    company,
    jobCategory,
    jobPost,
    language,
    visaRequirement,
    skillShortages,
    page,
    accreditation,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    multilingualTitle,
    multilingualDescription,
    seo,
  ]),
});
