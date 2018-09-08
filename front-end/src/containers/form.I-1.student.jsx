import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        height: '675px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    subButton: {
        color: 'white',
        background: 'green'
    },
    fullTextField : {
        width: 440
    }
});
class FormI1Student extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stdId: '',
            name: '',
            address: '',
            homePhone: '',
            mobilePhone: '',
            email: '',
            semester: '',
            year: '',
            cgpa: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <div  >
                <Grid container alignItems="center" justify="center">
                <Paper className={classes.root} >
                    <form>
                        <Grid direction='column' container alignItems="center" justify="center" spacing={16}>
                            <Grid item md>
                                <Typography variant='headline'>Form I-1</Typography>
                                <Typography variant='subheading'>Internship Acceptance Form</Typography>
                            </Grid>
                            <Grid direction='row' alignItems="center" justify="center" container item md spacing={40}>
                                <Grid item>
                                    <TextField value={this.state.stdId} id='stdId' onChange={this.handleOnChange} label='Student ID' required />
                                </Grid>
                                <Grid item>
                                    <TextField value={this.state.name} id='name' onChange={this.handleOnChange} label='Student Name' required />
                                </Grid>
                            </Grid>
                            <Grid item md>
                                <TextField className={classes.fullTextField} value={this.state.address} id='address' fullWidth onChange={this.handleOnChange} label='Address' required />
                            </Grid>
                            <Grid direction='row' alignItems="center" justify="center" container item md spacing={40}>
                            <Grid item >
                                <TextField value={this.state.homePhone} id='homePhone' onChange={this.handleOnChange} label='Home Phone' type='tel' required />
                            </Grid>
                            <Grid item >
                                <TextField value={this.state.mobilePhone} id='mobilePhone' onChange={this.handleOnChange} label='Mobile Phone' type='tel' required />
                            </Grid>
                            </Grid>
                            <Grid item md>
                                <TextField
                                    value={this.state.email}
                                    id='email'
                                    onChange={this.handleOnChange}
                                    label='E-mail'
                                    helperText='Use Comma(,) to seperate multiple e-mail addresses'
                                    required
                                    multiline
                                    className = {classes.fullTextField}
                                />
                            </Grid>
                            <Grid container item direction='row' spacing={8} md>
                                <Grid item md>
                                    <TextField value={this.state.semester} id='semester' onChange={this.handleOnChange} label='Semester' type='number' min="1" max="2" required />
                                </Grid>
                                <Grid item md>
                                    <TextField value={this.state.year} id='year' onChange={this.handleOnChange} label='Year' type='number' min="1" max="4" required />
                                </Grid>
                                <Grid item md>
                                    <TextField value={this.state.cgpa} id='cgpa' onChange={this.handleOnChange} label='CGPA' type='number' required />
                                </Grid> 
                            </Grid>
                            <br/>
                            <Grid item md>
                                <Button variant='contained' className={classes.subButton} type='submit'>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
                </Grid>
            </div>
        );
    }
}
FormI1Student.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(FormI1Student);