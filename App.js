import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  FlatList,
  ScrollView,
} from 'react-native';
import ImageSlider from 'react-native-image-slider';

export default class App extends React.Component {
  render() {
    const images = [
      'https://dokan.com/media/simi/simiconnector/banner/Kids-Toys-2.jpg',
      'https://dokan.com/media/simi/simiconnector/banner/Hand-bags-Sale-banner.jpg',
      'https://dokan.com/media/simi/simiconnector/banner/mainbanner2.jpg',
      'https://dokan.com/media/simi/simiconnector/banner/Lingerie-collection-web-banner.jpg',
    ];

    const categories = [
      {
        cate_id: '1',
        cate_name: 'Shoes',
        cate_image: 'https://dokan.com/media/simi/simiconnector/simicategory/SHOES-CAT.jpg',
      },
      {
        cate_id: '2',
        cate_name: 'New Collection',
        cate_image: 'https://dokan.com/media/simi/simiconnector/simicategory/SUMMER_COLLECTION_BANNER.jpg',
      },
      {
        cate_id: '3',
        cate_name: 'Arabian Clothing',
        cate_image: 'https://dokan.com/media/simi/simiconnector/simicategory/ARABIAN-CLOTHING_CAT.jpg',
      },
      {
        cate_id: '4',
        cate_name: 'Dress',
        cate_image: 'https://dokan.com/media/simi/simiconnector/simicategory/Dress-bannera.jpg',
      },
      {
        cate_id: '5',
        cate_name: 'Women',
        cate_image: 'https://dokan.com/media/simi/simiconnector/simicategory/WOMENS-CAT.jpg',
      },
      {
        cate_id: '6',
        cate_name: 'Men',
        cate_image: 'https://dokan.com/media/simi/simiconnector/simicategory/MENS-CAT.jpg',
      },
    ];

    const homeproductlists = [
      {
        productlist_id: '1',
        list_title: "Most Viewed 1",
        products: [
          {
            product_id: '1',
            product_name: 'Waist Trainer Shaper Corsets',
            product_image: 'https://dokan.com/media/catalog/product/cache/1/small_image/600x600/040ec09b1e35df139433887a97daa66f/w/a/waist-trainer-shaper-corsets-1.jpg',
            product_price: 'AED69',
          },
          {
            product_id: '2',
            product_name: 'Luggage Covers',
            product_image: 'https://dokan.com/media/catalog/product/cache/1/small_image/600x600/040ec09b1e35df139433887a97daa66f/l/u/luggage-covers-2.jpg',
            product_price: 'AED29',
          },
          {
            product_id: '3',
            product_name: 'Pleated Culottes',
            product_image: 'https://dokan.com/media/catalog/product/cache/1/small_image/600x600/040ec09b1e35df139433887a97daa66f/p/l/pleated-culottes-3a.jpg',
            product_price: 'AED45',
          },
          {
            product_id: '4',
            product_name: 'Bikini Swimsuit With Skirt',
            product_image: 'https://dokan.com/media/catalog/product/cache/1/small_image/600x600/040ec09b1e35df139433887a97daa66f/b/i/bikini-swimsuit-with-skirt-3.jpg',
            product_price: 'AED39',
          },
          {
            product_id: '5',
            product_name: 'High Slit Maxi Dress',
            product_image: 'https://dokan.com/media/catalog/product/cache/1/small_image/600x600/040ec09b1e35df139433887a97daa66f/h/i/high-slit-maxi-dress-1.jpg',
            product_price: 'AED59',
          },
          {
            product_id: '6',
            product_name: 'Retro Design Bikini',
            product_image: 'https://dokan.com/media/catalog/product/cache/1/small_image/600x600/040ec09b1e35df139433887a97daa66f/h/i/high-waist-retro-bikini-prime.jpg',
            product_price: 'AED39',
          },
        ]
      },
      {
        productlist_id: '2',
        list_title: "Most Viewed 2",
        products: [
          {
            product_id: '7',
            product_name: 'Spaghetti Strap Jumpsuit',
            product_image: 'https://dokan.com/media/catalog/product/cache/1/small_image/600x600/040ec09b1e35df139433887a97daa66f/s/p/spaghetti-strap-jumpsuit-1.jpg',
            product_price: 'AED59',
          },
          {
            product_id: '8',
            product_name: 'High Waist Mini Short',
            product_image: 'https://dokan.com/media/catalog/product/cache/1/small_image/600x600/040ec09b1e35df139433887a97daa66f/h/i/high-waist-mini-short-1_1.jpg',
            product_price: 'AED49',
          },
          {
            product_id: '9',
            product_name: 'Butterfly Printed Top',
            product_image: 'https://dokan.com/media/catalog/product/cache/1/small_image/600x600/040ec09b1e35df139433887a97daa66f/b/u/butterfly-printed-top-prime.jpg',
            product_price: 'AED45',
          },
          {
            product_id: '10',
            product_name: 'Thin Laced Bra and Panty Set',
            product_image: 'https://dokan.com/media/catalog/product/cache/1/small_image/600x600/040ec09b1e35df139433887a97daa66f/t/h/thin-laced-bra-and-panty-set-1.jpg',
            product_price: 'AED39',
          },
          {
            product_id: '11',
            product_name: 'Quilted Bow Shoulder Bag',
            product_image: 'https://dokan.com/media/catalog/product/cache/1/small_image/600x600/040ec09b1e35df139433887a97daa66f/q/u/quilted-bow-shoulder-bag-prime.jpg',
            product_price: 'AED37',
          },
          {
            product_id: '12',
            product_name: 'Womens Hourglass Waist Chinchers',
            product_image: 'https://dokan.com/media/catalog/product/cache/1/small_image/600x600/040ec09b1e35df139433887a97daa66f/w/o/womens-hourglass-waist-chinchers-5.jpg',
            product_price: 'AED45',
          },
        ]
      }
    ]

    return (
      <ScrollView>
        <View style={styles.bannerContainer}>
          <ImageSlider
            loop
            autoPlayWithInterval={2000}
            images={images}
            onPress={({ index }) => alert(index)}
            customSlide={({ index, item, style, width }) => (
              <View
                key={index}
                style={[
                  style,
                  styles.customSlide,
                ]}>
                <Image source={{ uri: item }} style={styles.bannerItem} />
              </View>
            )}
          />
        </View>
        <View>
          <Text style={styles.title}>CATEGORY</Text>
          <FlatList
            style={{marginLeft: 15}}
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.cate_id}
            renderItem={({item}) =>
              <View style={styles.listItem}>
                <Image resizeMode='center' source={{ uri: item.cate_image }} style={styles.imageListItem} />
                <Text style={styles.textListItem}>{item.cate_name}</Text>
              </View>
            }
          />
        </View>
        <FlatList
            data={homeproductlists}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.productlist_id}
            renderItem={({item}) =>
              <View>
                <Text style={styles.title}>{item.list_title}</Text>
                <FlatList
                  style={{marginLeft: 15}}
                  data={item.products}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.product_id}
                  renderItem={({item}) =>
                    <View style={styles.listItem}>
                      <Image resizeMode='center' source={{ uri: item.product_image }} style={styles.imageListItem} />
                      <Text numberOfLines={1} style={styles.textListProductItem}>{item.product_name}</Text>
                      <Text style={styles.textPriceListProductItem}>{item.product_price}</Text>
                    </View>
                  }
                />
              </View>
            }
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  bannerContainer: {
    width: '100%',
    height: 220,
  },
  customSlide: {
    alignItems: 'center',
    height: 220,
    backgroundColor: 'red',
  },
  bannerItem: {
    width: '100%',
    height: 220,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15,
  },
  listItem: {
    width: 140,
    paddingRight: 10
  },
  imageListItem: {
    width: 130,
    height: 130,
  },
  textListItem: {
    fontSize: 16, 
    textAlign: 'center'
  },
  textListProductItem: {
    fontSize: 16
  },
  textPriceListProductItem: {
    fontSize: 16,
    color: 'red'
  }
});
