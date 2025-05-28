// import React, { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAccountsRequest } from '../Store/actions/accountAction';

// const AccountList = () => {
//   const dispatch = useDispatch();
//   const { data, loading, pageNumber, totalPages } = useSelector((state) => state.account);

//   const observer = useRef(null);
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     dispatch(
//       fetchAccountsRequest({
//         pageNumber: 0,
//         pageSize: 15,
//         search: [{ key: 'name', value: '' }],
//         sortKey: '',
//         sortOrder: '',
//       })
//     );
//   }, []);

//   const lastElementRef = (node) => {
//     if (loading) return;
//     if (observer.current) observer.current.disconnect();

//     observer.current = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && pageNumber + 1 < totalPages) {
//           dispatch(
//             fetchAccountsRequest({
//               pageNumber: pageNumber + 1,
//               pageSize: 15,
//               search: [{ key: 'name', value: '' }],
//               sortKey: '',
//               sortOrder: '',
//             })
//           );
//         }
//       },
//       {
//         root: scrollContainerRef.current, // 🔥 container as scroll root
//         threshold: 1.0,
//       }
//     );

//     if (node) observer.current.observe(node);
//   };




// return (
//     <div
//       ref={scrollContainerRef}
//       style={{
//         height: '300px',
//         overflowY: 'auto',
//         border: '1px solid #ccc',
//         padding: '10px',
//       }}
//     >
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(5, 1fr)',
//           gap: '10px',
//         }}
//       >
//         {data.map((account, index) => (
//           <div
//             key={account.id}
//             ref={index === data.length - 1 ? lastElementRef : null}
//             style={{
//               padding: '12px',
//               border: '1px solid #eee',
//               borderRadius: '8px',
//               backgroundColor: '#f9f9f9',
//               textAlign: 'center',
//             }}
//           >
//             {account.name}
//           </div>
//         ))}
//       </div>
//       {loading && <p style={{ textAlign: 'center', marginTop: '10px' }}>Loading...</p>}
//     </div>
//   );
// };

// export default AccountList;




//   return (
//     <div
//       ref={scrollContainerRef}
//       style={{
//         height: '200px', 
//         overflowY: 'auto',
//         border: '1px solid #ccc',
//         padding: '10px',
//       }}
//     >
//       {data.map((account, index) => (
//         <div
//           key={account.id}
//           ref={index === data.length - 1 ? lastElementRef : null}
//           style={{
//             padding: '8px',
//             borderBottom: '1px solid #eee',
//           }}
//         >
//           {account.name}
//         </div>
//       ))}
//       {loading && <p>Loading...</p>}
//     </div>
//   );

// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAccountsRequest } from '../Store/actions/accountAction';

// const AccountList = () => {
//   const dispatch = useDispatch();
//   const { data = [], loading, pageNumber = 0, totalPages = 1 } = useSelector(
//     (state) => state.account || {}
//   );

//   const observer = useRef(null);
//   const scrollContainerRef = useRef(null);
//   const [hasScrolled, setHasScrolled] = useState(false);

//   // Initial fetch
//   useEffect(() => {
//     dispatch(
//       fetchAccountsRequest({
//         pageNumber: 0,
//         pageSize: 15,
//         search: [{ key: 'name', value: '' }],
//         sortKey: '',
//         sortOrder: '',
//       })
//     );
//   }, [dispatch]);

//   // Detect scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!hasScrolled) setHasScrolled(true);
//     };

//     const current = scrollContainerRef.current;
//     if (current) {
//       current.addEventListener('scroll', handleScroll);
//     }

//     return () => {
//       if (current) {
//         current.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, [hasScrolled]);

//   // Observer to trigger load more
//   const lastElementRef = useCallback(
//     (node) => {
//       if (loading) return;
//       if (observer.current) observer.current.disconnect();

//       observer.current = new IntersectionObserver(
//         (entries) => {
//           if (
//             entries[0].isIntersecting &&
//             pageNumber + 1 < totalPages &&
//             hasScrolled // ✅ only load if user has scrolled
//           ) {
//             dispatch(
//               fetchAccountsRequest({
//                 pageNumber: pageNumber + 1,
//                 pageSize: 15,
//                 search: [{ key: 'name', value: '' }],
//                 sortKey: '',
//                 sortOrder: '',
//               })
//             );
//           }
//         },
//         {
//           root: scrollContainerRef.current,
//           threshold: 0.3,
//         }
//       );

//       if (node) observer.current.observe(node);
//     },
//     [dispatch, loading, pageNumber, totalPages, hasScrolled]
//   );

//   return (
//     <div
//       ref={scrollContainerRef}
//       style={{
//         height: '100px',
//         overflowY: 'auto',
//         border: '1px solid #ccc',
//         padding: '10px',
//       }}
//     >
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(5, 1fr)',
//           gap: '10px',
//         }}
//       >
//         {data.map((account, index) => (
//           <div
//             key={account.id}
//             ref={index === data.length - 1 ? lastElementRef : null}
//             style={{
//               padding: '12px',
//               border: '1px solid #eee',
//               borderRadius: '8px',
//               backgroundColor: '#f9f9f9',
//               textAlign: 'center',
//             }}
//           >
//             {account.name}
//           </div>
//         ))}
//       </div>
//       {loading && <p style={{ textAlign: 'center', marginTop: '10px' }}>Loading...</p>}
//     </div>
//   );
// };

// export default AccountList;




// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAccountsRequest } from '../Store/actions/accountAction';

// const PAGE_SIZE = 15;

// const AccountList = () => {
//   const dispatch = useDispatch();
//   const { data = [], loading, pageNumber = 0, totalPages = 1 } = useSelector(
//     (state) => state.account || {}
//   );

//   const observer = useRef(null);
//   const scrollContainerRef = useRef(null);
//   const [hasScrolled, setHasScrolled] = useState(false);

//   // Initial fetch
//   useEffect(() => {
//     dispatch(
//       fetchAccountsRequest({
//         pageNumber: 0,
//         pageSize: PAGE_SIZE,
//         search: [{ key: 'name', value: '' }],
//         sortKey: '',
//         sortOrder: '',
//       })
//     );
//   }, [dispatch]);

//   // Track scroll to enable pagination
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!hasScrolled) setHasScrolled(true);
//     };

//     const current = scrollContainerRef.current;
//     if (current) current.addEventListener('scroll', handleScroll);
//     return () => {
//       if (current) current.removeEventListener('scroll', handleScroll);
//     };
//   }, [hasScrolled]);

//   // Intersection Observer for Infinite Scroll
//   const lastElementRef = useCallback(
//     (node) => {
//       if (loading) return;
//       if (observer.current) observer.current.disconnect();

//       observer.current = new IntersectionObserver(
//         (entries) => {
//           if (
//             entries[0].isIntersecting &&
//             pageNumber + 1 < totalPages &&
//             hasScrolled
//           ) {
//             dispatch(
//               fetchAccountsRequest({
//                 pageNumber: pageNumber + 1,
//                 pageSize: PAGE_SIZE,
//                 search: [{ key: 'name', value: '' }],
//                 sortKey: '',
//                 sortOrder: '',
//               })
//             );
//           }
//         },
//         {
//           root: scrollContainerRef.current,
//           threshold: 0.3,
//         }
//       );

//       if (node) observer.current.observe(node);
//     },
//     [dispatch, loading, pageNumber, totalPages, hasScrolled]
//   );

//   return (
//     <div
//       ref={scrollContainerRef}
//       style={{
//         height: '300px',
//         overflowY: 'auto',
//         border: '1px solid #ccc',
//         padding: '10px',
//       }}
//     >
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(5, 1fr)',
//           gap: '10px',
//         }}
//       >
//         {data.map((account, index) => {
//           const isLast = index === data.length - 1;
//           const isLoaderBox = loading && index === data.length - 1;

//           if (isLoaderBox) {
//             return (
//               <div
//                 key={'loader'}
//                 style={{
//                   height: '50px',
//                   backgroundColor: '#f0f0f0',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   border: '1px dashed #ccc',
//                   borderRadius: '8px',
//                 }}
//               >
//                 Loading...
//               </div>
//             );
//           }

//           return (
//             <div
//               key={account.id}
//               ref={isLast ? lastElementRef : null}
//               style={{
//                 padding: '40px',
//                 border: '1px solid #eee',
//                 borderRadius: '8px',
//                 backgroundColor: '#f9f9f9',
//                 textAlign: 'center',
//               }}
//             >
//               {account.name}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AccountList;



// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAccountsRequest } from '../Store/actions/accountAction';

// const PAGE_SIZE = 15;

// const AccountList = () => {
//   const dispatch = useDispatch();
//   const { data = [], loading, pageNumber = 0, totalPages = 1 } = useSelector(
//     (state) => state.account || {}
//   );

//   const observer = useRef(null);
//   const scrollContainerRef = useRef(null);
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [isFirstLoad, setIsFirstLoad] = useState(true); // Track first load

//   // Initial fetch
//   useEffect(() => {
//     dispatch(
//       fetchAccountsRequest({
//         pageNumber: 0,
//         pageSize: PAGE_SIZE,
//         search: [{ key: 'name', value: '' }],
//         sortKey: '',
//         sortOrder: '',
//       })
//     );
//   }, [dispatch]);

//   // Track scroll to enable pagination
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!hasScrolled) setHasScrolled(true);
//     };

//     const current = scrollContainerRef.current;
//     if (current) current.addEventListener('scroll', handleScroll);
//     return () => {
//       if (current) current.removeEventListener('scroll', handleScroll);
//     };
//   }, [hasScrolled]);

//   // Intersection Observer for Infinite Scroll
//   const lastElementRef = useCallback(
//     (node) => {
//       if (loading) return;
//       if (observer.current) observer.current.disconnect();

//       observer.current = new IntersectionObserver(
//         (entries) => {
//           if (
//             entries[0].isIntersecting &&
//             pageNumber + 1 < totalPages &&
//             hasScrolled
//           ) {
//             dispatch(
//               fetchAccountsRequest({
//                 pageNumber: pageNumber + 1,
//                 pageSize: PAGE_SIZE,
//                 search: [{ key: 'name', value: '' }],
//                 sortKey: '',
//                 sortOrder: '',
//               })
//             );
//           }
//         },
//         {
//           root: scrollContainerRef.current,
//           threshold: 0.3,
//         }
//       );

//       if (node) observer.current.observe(node);
//     },
//     [dispatch, loading, pageNumber, totalPages, hasScrolled]
//   );

//   // Set isFirstLoad to false after the first fetch is done
//   useEffect(() => {
//     if (data.length > 0 && isFirstLoad) {
//       setIsFirstLoad(false);
//     }
//   }, [data, isFirstLoad]);


//   return (
    

//     <div
//   ref={scrollContainerRef}
//   style={{
//     height: '300px',
//     overflowY: 'auto',
//     border: '1px solid #ccc',
//     padding: '10px',
//   }}
// >
//   {/* Flex container with wrap to simulate 5-column layout */}
//   <div
//     style={{
//       display: 'flex',
//       flexWrap: 'wrap',
//       gap: '10px',
//     }}
//   >
//     {(isFirstLoad || loading) && pageNumber === 0 && (
//       <div
//         style={{
//           width: '19%', // 100 / 5 = 20, minus gap = ~19%
//           height: '50px',
//           backgroundColor: '#f0f0f0',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           border: '1px dashed #ccc',
//           borderRadius: '8px',
//         }}
//       >
//         Loading...
//       </div>
//     )}
// {data.map((item, index) => {
//   const isLast = index === data.length - 1;
//   const isLoaderBox = loading && index === data.length - 1;

//   const attachmentArrays = {};
//   item?.attachmentBos?.forEach((attachment) => {
//     const documentType = attachment.documentType;
//     if (!attachmentArrays[documentType]) {
//       attachmentArrays[documentType] = [];
//     }
//     attachmentArrays[documentType].push(attachment);
//   });

//   const logoAttachments = attachmentArrays["LOGO"];
//   const firstLogo = logoAttachments && logoAttachments.length > 0 ? logoAttachments[0] : null;
// //   const creationTime = moment(item.creationTime).format("MMM YYYY");

//   if (isLoaderBox) {
//     return (
//       <div
//         key={'loader'}
//         style={{
//           width: '19%',
//           height: '50px',
//           backgroundColor: '#f0f0f0',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           border: '1px dashed #ccc',
//           borderRadius: '8px',
//         }}
//       >
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div
//       key={item.id}
//       ref={isLast ? lastElementRef : null}
//       style={{
//         width: '19%',
//         border: '1px solid #eee',
//         borderRadius: '8px',
//         backgroundColor: '#ffffff',
//         textAlign: 'center',
//         boxSizing: 'border-box',
//         padding: '16px',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '8px',
//       }}
//     >
//       {/* Logo */}
//       {firstLogo?.url && (
//         <img
//           src={firstLogo.url}
//           alt="Logo"
//           style={{
//             width: '50px',
//             height: '50px',
//             borderRadius: '50%',
//             objectFit: 'cover',
//             margin: '0 auto',
//           }}
//         />
//       )}

//       {/* Title */}
//       <div style={{ fontWeight: 600, fontSize: '14px' }}>{item.title}</div>
//       <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '8px' }}>
//         <div>
//           <strong>{item.live}</strong>
//           <div style={{ color: '#888' }}>Live</div>
//         </div>
//         <div>
//           <strong>{item.engaged}</strong>
//           <div style={{ color: '#888' }}>Engaged</div>
//         </div>
//       </div>
//     </div>
//   );
// })}

//   </div>
// </div>

//   );
// };

// export default AccountList;

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccountsRequest } from '../Store/actions/accountAction';

const PAGE_SIZE = 15;

const AccountList = () => {
  const dispatch = useDispatch();
  const { data = [], loading, pageNumber = 0, totalPages = 1 } = useSelector(
    (state) => state.account || {}
  );

  const observer = useRef(null);
  const scrollContainerRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    dispatch(
      fetchAccountsRequest({
        pageNumber: 0,
        pageSize: PAGE_SIZE,
        search: [{ key: 'name', value: '' }],
        sortKey: '',
        sortOrder: '',
      })
    );
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) setHasScrolled(true);
    };

    const current = scrollContainerRef.current;
    if (current) current.addEventListener('scroll', handleScroll);
    return () => {
      if (current) current.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (
            entries[0].isIntersecting &&
            pageNumber + 1 < totalPages &&
            hasScrolled
          ) {
            dispatch(
              fetchAccountsRequest({
                pageNumber: pageNumber + 1,
                pageSize: PAGE_SIZE,
                search: [{ key: 'name', value: '' }],
                sortKey: '',
                sortOrder: '',
              })
            );
          }
        },
        {
          root: scrollContainerRef.current,
          threshold: 0.3,
        }
      );

      if (node) observer.current.observe(node);
    },
    [dispatch, loading, pageNumber, totalPages, hasScrolled]
  );

  useEffect(() => {
    if (data.length > 0 && isFirstLoad) {
      setIsFirstLoad(false);
    }
  }, [data, isFirstLoad]);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        height: '300px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        padding: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {/* Add Account Card */}
        {!loading && (
          <div
            style={{
              width: '19%',
              border: '2px dashed #aaa',
              borderRadius: '8px',
              backgroundColor: '#fafafa',
              textAlign: 'center',
              boxSizing: 'border-box',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => {
              console.log('Add Account clicked!');
              // You can open a modal or navigate
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#308D46',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                marginBottom: '8px',
              }}
            >
              +
            </div>
            <div style={{ fontWeight: 500, fontSize: '14px', color: '#308D46' }}>
              Add Account
            </div>
          </div>
        )}

        {(isFirstLoad || loading) && pageNumber === 0 && (
          <div
            style={{
              width: '19%',
              height: '50px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px dashed #ccc',
              borderRadius: '8px',
            }}
          >
            Loading...
          </div>
        )}

        {data.map((item, index) => {
          const isLast = index === data.length - 1;
          const isLoaderBox = loading && index === data.length - 1;

          const attachmentArrays = {};
          item?.attachmentBos?.forEach((attachment) => {
            const documentType = attachment.documentType;
            if (!attachmentArrays[documentType]) {
              attachmentArrays[documentType] = [];
            }
            attachmentArrays[documentType].push(attachment);
          });

          const logoAttachments = attachmentArrays["LOGO"];
          const firstLogo = logoAttachments && logoAttachments.length > 0 ? logoAttachments[0] : null;

          if (isLoaderBox) {
            return (
              <div
                key={'loader'}
                style={{
                  width: '19%',
                  height: '50px',
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px dashed #ccc',
                  borderRadius: '8px',
                }}
              >
                Loading...
              </div>
            );
          }

          return (
            <div
              key={item.id}
              ref={isLast ? lastElementRef : null}
              style={{
                width: '19%',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                textAlign: 'center',
                boxSizing: 'border-box',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {/* Logo */}
              {firstLogo?.url && (
                <img
                  src={firstLogo.url}
                  alt="Logo"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto',
                  }}
                />
              )}

              {/* Title */}
              <div style={{ fontWeight: 600, fontSize: '14px' }}>{item.title}</div>

              {/* Stats */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '8px' }}>
                <div>
                  <strong>{item.live}</strong>
                  <div style={{ color: '#888' }}>Live</div>
                </div>
                <div>
                  <strong>{item.engaged}</strong>
                  <div style={{ color: '#888' }}>Engaged</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccountList;







