import React from 'react';

function ProductCard({data = [], loading, error}) {
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            {
                data.slice(0, 8)?.map((product) => (
                    <div key={product.id} >
                        <div className={"relative h-[300px] w-[285px]"}><img className={"h-full w-full object-cover"} src={product.image} alt={"image"}/>
                            <div className={"absolute top-0 right-2"}>
                                {product.newArrival? <div>New</div> :<div>{product.discount}</div>}
                            </div>
                        </div>
                        <div className={"bg-light-bg"}>
                            <h3>{product.title}</h3> <p>{product.shortDescription}</p>
                            <div>
                                <h4>{product.price}</h4> <p><del>50.000</del></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default ProductCard;