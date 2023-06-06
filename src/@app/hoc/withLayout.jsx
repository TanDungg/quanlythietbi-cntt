import PropTypes from 'prop-types';
import AppLayout from '../core/AppLayout';
/**
 * withLayout
 * Lấy ra Layout cần sử dụng chung
 * Không chứa Layout
 */
const withLayout = (Component, props) => {
  const LayoutWrapper = () => {
    return (
      <AppLayout>
        <Component />
      </AppLayout>
    );
  };
  return LayoutWrapper;
};

withLayout.propTypes = {
  components: PropTypes.element,
  props: PropTypes.object,
};

export default withLayout;
