import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Switch, TouchableOpacity} from 'react-native';
import { Input, Button } from '@rneui/themed';
import {Styles} from '../Style/Style';
import { Feather, AntDesign, MaterialCommunityIcons, MaterialIcons, FontAwesome, Octicons, Entypo } from '@expo/vector-icons';
import RadioButtonRN from 'radio-buttons-react-native'; 

export default function Screen1() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView style={Styles.container}>
      <View style={{justifyContent: 'space-between'}}>
      <Text style={Styles.header}>Project Details</Text>
      <Text style={Styles.text}>Enter the Name your project</Text>
      <TextInput style={Styles.input}/>
      <Text style={Styles.text}>Which industry is this project for?</Text>
      <TextInput style={Styles.input}/>
      <Text style={Styles.text}>Who is your Target audience?</Text>
      <TextInput style={[Styles.input, {height: 180}]} multiline/>
      <Text style={Styles.text}>Whats's the Purpose of the project?*</Text> 
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
       <TouchableOpacity style={Styles.options}>
         <Text>Informative</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.options}>
        <Text>Event-Fastive/Concert/Webinar/Podcast</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
       <TouchableOpacity style={Styles.options}>
        <Text>Guest/Jury Intro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.options}>
         <Text>Product/Service/Brand Intro</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
       <TouchableOpacity style={Styles.options}>
        <Text>Music/Movie/Album</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.options}>
         <Text>PR Poster</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.options}>
         <Text>Custom</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <Text style={Styles.header}>Add Content Items</Text>
        <Text style={Styles.text}>What Should we Call this poster?</Text> 
        <TextInput style={Styles.input}/>
        <Text style={[Styles.text, {fontSize: 17}]}>Please add the content to be used in the design</Text>
        <View style={Styles.uploadView}>
        <TextInput style={[Styles.input, {flex: 1}]} placeholder='You can add text here or upload files that contain the content of this poster'/>
        <Feather name="paperclip" size={24} color="green" style={{marginTop: 10}}/>
        </View>
        <Text style={Styles.text}>Add images or artwork that is required for this poster</Text>
        <View style={[Styles.input, {flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'center'}]}>
          <Text style={{fontSize: 15, marginRight: 5}}>Browse from your computer</Text>
          <AntDesign name="upload" size={20} color="green" />
          </View>
        <Text style={Styles.text}>Select the layout and size</Text>
        <ScrollView horizontal={true} style={{flexDirection: 'row', margin: 10}}>
        <View style={Styles.layoutView}>
        <Feather name="square" size={50} color="#423F41" />
        <Text style={{fontSize: 20, fontWeight: '400', marginTop: 8}}>Square</Text>
        <Text style={{fontWeight: '300', fontSize: 20}}>1080x1080</Text>
        </View>
        <View style={Styles.layoutView}>
        <MaterialCommunityIcons name="rectangle-outline" size={60} color="#423F41" />
        <Text style={{fontSize: 20, fontWeight: '400', marginTop: 5}}>4:3</Text>
        <Text style={{fontWeight: '300', fontSize: 20}}>4032x3024</Text>
        </View>
        <View style={Styles.layoutView}>
        <MaterialCommunityIcons name="rectangle-outline" size={60} color="#423F41" />
        <Text style={{fontSize: 20, fontWeight: '400', marginTop: 5}}>4:3</Text>
        <Text style={{fontWeight: '300', fontSize: 20}}>4032x3024</Text>
        </View>
        </ScrollView>
        <View style={{flexDirection: 'row', backgroundColor: '#E5E2E4', margin: 10, borderRadius: 5, alignItems: 'center', padding: 5}}>
          <View style={{marginRight: 100}}>
          <Text style={[Styles.text, {marginBottom: 0}]}>Facebook Post</Text>
          <Text style={{fontSize: 15, margin: 5, marginTop: 0}}>squeare 1080x1080</Text>
          </View>
          <MaterialCommunityIcons name="pencil-outline" size={30} color="black" />
          <MaterialIcons name="content-copy" size={30} color="green" />
          <MaterialIcons name="delete-outline" size={30} color="black" />
        </View>
        <View style={[Styles.input, {flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'center'}]}>
          <Text style={{fontSize: 17, marginRight: 8, fontWeight: '500'}}>Add another poster</Text>
          <AntDesign name="plus" size={24} color="green" />
          </View>
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <Text style={[Styles.header, {fontSize: 28, textAlign: 'left'}]}>Select Design Preferences</Text>
        <Text style={Styles.text}>Which poster design Style do you prefer?</Text>
        <ScrollView horizontal={true} style={{flexDirection: 'row', margin: 10}}>
        <View style={Styles.View}>
        <Text style={{fontWeight: '600', fontSize: 18}}>Illustrations</Text>
        </View>
        <View style={Styles.View}>
        <Text style={{fontWeight: '600', fontSize: 18}}>Images</Text>
        </View>
        <View style={Styles.View}>
        <Text style={{fontWeight: '600', fontSize: 18}}>Texts</Text>
        </View>
        </ScrollView>
        <Text style={[Styles.text, {fontSize: 18}]}>Do you need your brand logo on the designs</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={Styles.radio}>
          <Entypo name="circle" size={24} color="black" />
          <Text style={{marginLeft: 5}}>Yes</Text>
          </View>
          <View style={Styles.radio}>
          <AntDesign name="checkcircle" size={24} color="green" />
          <Text style={{marginLeft: 5}}>No</Text>
          </View>
        </View>
        <Text style={Styles.text}>Can designer use the stock images</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={Styles.radio}>
          <Entypo name="circle" size={24} color="black" />
          <Text style={{marginLeft: 5}}>Yes</Text>
          </View>
          <View style={Styles.radio}>
          <Entypo name="circle" size={24} color="black" />
          <Text style={{marginLeft: 5}}>No</Text>
          </View>
          <View style={Styles.radio}>
          <Entypo name="circle" size={24} color="black" />
          <Text style={{marginLeft: 5}}>Don't know</Text>
          </View>
        </View>
        <Text style={Styles.text}>How will you publish or post it?</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={Styles.radio}>
          <Entypo name="circle" size={24} color="black" />
          <Text style={{marginLeft: 5}}>Digital</Text>
          </View>
          <View style={Styles.radio}>
          <Entypo name="circle" size={24} color="black" />
          <Text style={{marginLeft: 5}}>Print</Text>
          </View>
        </View>
        <Text style={Styles.text}>Which file formats do you need?</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={Styles.radio}>
          <AntDesign name="checksquare" size={24} color="green" />
          <Text style={{marginLeft: 5}}>jpg/jpeg</Text>
          </View>
          <View style={Styles.radio}>
          <Feather name="square" size={24} color="black" />
          <Text style={{marginLeft: 5}}>png</Text>
          </View>
          <View style={Styles.radio}>
          <Feather name="square" size={24} color="black" />
          <Text style={{marginLeft: 5}}>pdf</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
          <Text style={Styles.text}>I also want open files</Text>
          <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={Styles.text}>Anything else to keep in mind for the overall project</Text>
        <TextInput style={[Styles.input, {height: 180}]} multiline/>
      </View>
      <View>
        <Text style={Styles.header}>Brand Guidlines</Text>
        <Text style={Styles.text}>Add your logo(to be added to your poster)</Text>
        <View style={{flexDirection: 'row', backgroundColor: '#E5E2E4', borderRadius: 5, padding: 4, alignItems: 'flex-start', margin: 5}}>
        <TextInput style={[Styles.input, {flex: 1}]} placeholder='You can upload the logo files or add links'/>
        <Feather name="paperclip" size={24} color="black" style={{marginTop: 20, marginRight: 10}}/>
        </View>
        <Text style={Styles.text}>Add your brand's design guidelines</Text>
        <View style={{flexDirection: 'row', backgroundColor: '#E5E2E4', borderRadius: 5, padding: 4, alignItems: 'flex-start', margin: 5}}>
        <TextInput style={[Styles.input, {flex: 1}]} placeholder='You can upload the guideline files or add links of tehm'/>
        <Feather name="paperclip" size={24} color="black" style={{marginTop: 20, marginRight: 10}}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
          <Text style={Styles.text}>I also want open files</Text>
          <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <Text style={[Styles.header, {fontSize: 30}]}>Add Company Details</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
          <Text style={Styles.text}>I'm an individual</Text>
          <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={Styles.text}>What is company, brand or product's name?</Text>
        <TextInput style={Styles.input} placeholder='Abcdef'/>
        <Text style={Styles.text}>Which industry is the primary sector for your company's operations</Text>
        <View style={[Styles.input, {justifyContent: 'center', alignItems: 'flex-end', padding: 15}]}>
        <Octicons name="triangle-down" size={24} color="black" />
        </View>
        <Text style={Styles.text}>Enter a short bio about the brand or product(Optional)</Text>
        <TextInput style={Styles.input}/>
      </View>
      <View>
        <Text style={Styles.header}>Designer Expertise</Text>
        <Text style={Styles.text}>Choose a skill level for your designer</Text>
        <ScrollView horizontal={true} style={{flexDirection: 'row', margin: 10}}>
        <View style={Styles.skillView}>
        <Text style={{fontWeight: '600', fontSize: 18}}>Experienced Designers</Text>
        <Text>1-4 years of design experience. Upto 2 revision allowed</Text>
        <View style={{flexDirection: 'row'}}>
        <Octicons name="star-fill" size={20} color="black" />
        <Octicons name="star-fill" size={20} color="black" />
        <Octicons name="star-fill" size={20} color="black" />
        </View>
        </View>
        <View style={Styles.skillView}>
        <Text style={{fontWeight: '600', fontSize: 18}}>Professional Designers</Text>
        <Text>5+ years of design experience who also understand your industry and target audience.
          Unlimited revisions allowed.
          <View style={{flexDirection: 'row'}}>
          <Octicons name="star-fill" size={20} color="black" />
          <Octicons name="star-fill" size={20} color="black" />
          <Octicons name="star-fill" size={20} color="black" />
          <Octicons name="star-fill" size={20} color="black" />
          </View>
        </Text>
        </View>
        </ScrollView>
      </View>
      <Button title='Submit' buttonStyle={{backgroundColor: 'green', marginTop: 2, borderRadius: 5}}/>
    </ScrollView>
  )
}


